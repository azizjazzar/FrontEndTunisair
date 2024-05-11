import React, { useState, useEffect } from "react";
import TextToSpeech from "./text-to-speech/TextToSpeech";
import SpeechToText from "./speech-to-text/SpeechToText ";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Cerveaux() {
  const [transcript, setTranscript] = useState("");
  const navigate = useNavigate();
  const [speech, setSpeech] = useState(null);
  const [actor] = useState(2);
  const location = useLocation();

  useEffect(() => {
    if (!speech) {
      if (transcript.toUpperCase().includes("BONJOUR")) {
        setSpeech({
          text: "Bonjour et bienvenue , Je suis , Alex , votre assistant vocal , Je suis là pour vous aider  ",
          language: "fr-FR",
          voiceIndex: actor
        });
      }
      else if (transcript.toUpperCase().includes("VOUS")) {
        setSpeech({
          text: " Nous sommes Tunisair, votre compagnie aérienne partenaire  , Pour en savoir plus , nous vous dirigeons vers notre page À propos de nous afin d'explorer davantage.",
          language: "fr-FR",
          voiceIndex: actor
        });
        setTimeout(() => {
          navigate("/A propos de nous");
        }, 10500);
      }


      else if (transcript.toUpperCase().includes("AIDE")) {
        setSpeech({
          text: "D'accord , j'irais maintenant vers la page d'aide ",
          language: "fr-FR",
          voiceIndex: actor
        });
        setTimeout(() => {
          navigate("/Help");
        }, 2500);

      }


      else if (transcript.toUpperCase().includes("QUELLES SONT LES DESTINATIONS POPULAIRES")) {
        setSpeech({
          text: "Nos destinations populaires incluent Paris, New York et Tokyo  ",
          language: "fr-FR",
          voiceIndex: actor
        });
      }

      else if (transcript.toUpperCase().includes("JE VEUX ENVOYER UN MAIL")) {
        setSpeech({
          text: "Bien sûr ! Je vais vous diriger directement vers la page d'e-mail.",
          language: "fr-FR",
          voiceIndex: actor
        });
      }

      else if (transcript.toUpperCase().includes("COMMENT JE PEUX PAYER")) {
        setSpeech({
          text: "Vous pouvez effectuer le paiement de deux manières soit par carte bancaire ou par solde.",
          language: "fr-FR",
          voiceIndex: actor
        });
      }







    }


  }, [transcript, speech]);

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
