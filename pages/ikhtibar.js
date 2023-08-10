import React, { useState } from 'react';
import Head from 'next/head';
import questions from '../data/questions';
import { db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';

const Questionnaire = () => {
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [shareUrl, setShareUrl] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleResponse = (questionId, trait, score) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: { trait, score },
    }));
    setShareUrl(window.location.href);
  };

  const options = [
    { name: 'أها، متلي تمامًا!', score: 2 },
    { name: 'موافق', score: 1 },
    { name: 'محايد', score: 0 },
    { name: 'غير موافق', score: -1 },
    { name: 'غير موافق بشدة', score: -2 },
  ];

  const traitNamesArabic = {
    openness: 'الانفتاح',
    conscientiousness: 'الواجبات',
    extraversion: 'التواصل',
    agreeableness: 'الود',
    neuroticism: 'الاستقرار العصبي',
  };

  const calculatePersonalityTraits = () => {
    const traitScores = {
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      neuroticism: 0,
    };

    for (const response of Object.values(responses)) {
      traitScores[response.trait] += response.score;
    }

    return traitScores;
  };

  const getTraitPercentage = (trait) => {
    const traitScore = personalityTraits[trait];
    let traitPercentage =0;
    if (traitScore>=0){
    traitPercentage = (traitScore / 20  ) * 100; // Converting from -2 to 2 range to 0 to 100 range

    }else {
    traitPercentage = (1- traitScore / 20  ) * 100; // Converting from -2 to 2 range to 0 to 100 range

    }

    const formattedArabicPercentage = `${traitPercentage.toFixed(2)}%`;
    return formattedArabicPercentage;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && Object.keys(responses).length == 50) {
      setSubmitted(true);
      const userRef = collection(db, 'users');
      const userData = {
        name: name,
        responses: responses,
      };

      addDoc(userRef, userData);
    } else {
      alert('يرجى إدخال اسمك والإجابة على جميع الأسئلة.');
    }
  };

  const handleReset = () => {
    setResponses({});
    setSubmitted(false);
  };

  const getResultsSummary = (responses) => {
    const totalScore = Object.values(responses).reduce((sum, response) => sum + response.score, 0);
    const summary =
      totalScore >= 0
        ? 'لديك شخصية إيجابية! اكتشف المزيد عن نفسك وجرب الاختبار:'
        : 'لديك شخصية فريدة! اكتشف المزيد عن صفاتك وجرب الاختبار:';

    return summary;
  };

  const personalityTraits = calculatePersonalityTraits();


  return (
    <>
    <Head><title>اكتشف شخصيتك المثيرة للضحك!</title></Head>
    <div className="min-h-screen bg-gray-100 ">
<header className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <a href="#title"><h1 className="text-4xl font-bold mb-2">اكتشف شخصيتك المثيرة للضحك!</h1></a>
          <p className="text-lg mb-4">اختبر شخصيتك واكتشف جوانبك المضحكة والمدهشة. هل أنت مستعد؟</p>
          <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-300 transition duration-300">
            ابدأ الاختبار الآن
          </button>
        </div>
      </header>

 <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:max-w-md">
       <h2 id="title" className="text-2xl font-semibold mb-4">اختبار شخصيتك وتسلية مضمونة!</h2>

        {questions.map((question) => (
          <div key={question.id} className="mb-6">
            <p className="font-semibold mb-2">
              {question.text}
            </p>
            <div className="flex flex-col">
              {options.map((option) => (
                <label key={option.name} className="mb-2">
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    value={option.name}
                    checked={responses[question.id]?.score === option.score}
                    onChange={() => handleResponse(question.id, question.trait, option.score)}
                  />
                  <span className="ml-2">{option.name}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        {!submitted ? (
          <form onSubmit={handleSubmit}>
          {/* ... */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">اسمك:</label>
            <input
              type="text"
              className="w-full rounded-md p-2 border focus:outline-none focus:border-blue-500"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full w-full mt-4">
            اعرض النتيجة
          </button>
        </form>
        ) : (
          <div className="mt-6 text-center">
                <h2 className="text-lg font-semibold mb-2">صفاتك الطريفة:</h2>

            <div className="grid grid-cols-2 gap-2">
              {Object.entries(personalityTraits).map(([trait, score]) => (
                <div key={trait} className="bg-gray-200 rounded p-4">
                  <p className="font-semibold mb-1">
                    {traitNamesArabic[trait]}
                  </p>
                  <p>{score} ({getTraitPercentage(trait)})</p>
                </div>
              ))}
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full w-full mt-4 hover:bg-blue-600 transition duration-300"
              onClick={handleReset}
            >
              تغيير الإجابات
            </button>
    <a
      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
        `نتيجة اختبار شخصيتي: ${getResultsSummary(responses)}%0Aاكتشف المزيد عن نفسك وجرب الاختبار هنا: ${shareUrl}`
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 text-white mt-2 px-4 py-2 rounded-full block w-full text-center hover:bg-green-600 transition duration-300"
    >
      شارك النتيجة على واتساب
    </a>



 
          </div>

          
        )}
      </div>
      </div>

      
    </div>
    <footer className="text-center mt-4 text-sm text-gray-500">
  <p>تنويه: هذا الاختبار لأغراض التسلية فقط. وعلى فكرة، نحن ليسوا قراء أفكار!</p>
</footer></>
  );
};

export default Questionnaire;
