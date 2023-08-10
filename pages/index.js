import React, { useState } from 'react';
import questions from '../data/questions';

const Questionnaire = () => {
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);
const [shareUrl, setShareUrl] = useState('');

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
    communication: 'التواصل',
    friendliness: 'الود',
    emotional_stability: 'الاستقرار العصبي',
  };

  const calculatePersonalityTraits = () => {
    const traitScores = {
      openness: 0,
      conscientiousness: 0,
      communication: 0,
      friendliness: 0,
      emotional_stability: 0,
    };

    for (const response of Object.values(responses)) {
      traitScores[response.trait] += response.score;
    }

    return traitScores;
  };

  const getTraitPercentage = (trait) => {
    const traitScore = personalityTraits[trait];
    const traitPercentage = (traitScore / 20) * 100; // Assuming trait scores are in the range of -5 to 5

    const formattedArabicPercentage = `${traitPercentage.toFixed(2)}%`;
    return formattedArabicPercentage;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setResponses({});
    setSubmitted(false);
  };

  const getResultsSummary = (responses) => {
  // Calculate and summarize the results based on the responses
  // Replace this with your actual logic to generate the summary

  const totalScore = Object.values(responses).reduce((sum, score) => sum + score, 0);
  const summary = totalScore >= 0 ? 'You have a positive personality!' : 'You have a unique personality!';
  
  return summary;
};

  const personalityTraits = calculatePersonalityTraits();

  return (
    <>
    
    <div className="min-h-screen bg-gray-100 ">
<header className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">اكتشف شخصيتك المثيرة للضحك!</h1>
          <p className="text-lg mb-4">اختبر شخصيتك واكتشف جوانبك المضحكة والمدهشة. هل أنت مستعد؟</p>
          <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-300 transition duration-300">
            ابدأ الاختبار الآن
          </button>
        </div>
      </header>

 <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:max-w-md">
       <h1 className="text-2xl font-semibold mb-4">اختبار شخصيتك وتسلية مضمونة!</h1>

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
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full w-full hover:bg-blue-600 transition duration-300"
            onClick={handleSubmit}
          >
          أظهر لي جانبي المضحك!

          </button>
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
        `نتيجة اختبار شخصيتي: ${getResultsSummary(responses)}\n\nيمكنك تجربة الاختبار أيضًا واكتشاف جوانب شخصيتك المثيرة للضحك! %0A${shareUrl}`
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
