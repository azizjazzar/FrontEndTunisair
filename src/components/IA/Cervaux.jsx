import React, { useState, useEffect } from "react";
import axios from "axios";
import TextToSpeech from "./text-to-speech/TextToSpeech";
import SpeechToText from "./speech-to-text/SpeechToText "
import { useLocation, useNavigate } from 'react-router-dom';

export default function Cerveaux() {
  const [transcript, setTranscript] = useState("");
  const navigate = useNavigate();
  const [speech, setSpeech] = useState(null);
  const [actor] = useState(4);
  const [permatranscript, setPermatranscript] = useState("");

  const fetchResponseFromAPI = async (trans) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/api/IA`,
        { text: trans }
      );
      return res.data.answer;
    } catch (error) {
      console.error("Error fetching data from the OpenAI API:", error);
      return "Une erreur s'est produite lors de la récupération de la réponse.";
    }
  };

  useEffect(() => {
    const processTranscript = async () => { 
      if (!speech) {
      
         if (transcript.toUpperCase().includes("AIDE")) {
          setSpeech({
            text: "D'accord, j'irai maintenant vers la page d'aide.",
            language: "fr-FR",
            voiceIndex: actor
          });
          setTimeout(() => {
            navigate("/Help");
          }, 2500);
        } 
        else if (transcript.toUpperCase() != "") {
          const rep = await fetchResponseFromAPI(
            "Donc, je t'explique : vous êtes un assistant vocal pour Tunisair. Réponds-moi sans utiliser (*). Voici les dialogues précédents (si c'est vide, ignore) : " +
            permatranscript + ". Voici le dialogue actuel : " + transcript
          );
          setSpeech({
            text: rep,
            language: "fr-FR",
            voiceIndex: actor
          });
          setPermatranscript(permatranscript + " " + transcript); // Append to permatranscript
        } 
      }
    };

    processTranscript();

  }, [transcript, speech, actor, navigate, permatranscript]); // Include permatranscript in dependencies

  const handleTranscriptChange = (newTranscript) => {
    setTranscript(newTranscript);
    setSpeech(null);
  };

  return (
    <section className="pt-24 w-full">
      <div>
        <SpeechToText onTranscriptChange={handleTranscriptChange} language={"fr-FR"} />
        {speech && <TextToSpeech text={speech.text} language={speech.language} voiceIndex={speech.voiceIndex} />}
      </div>
    </section>
  );
}
