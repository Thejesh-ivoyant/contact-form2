// import spacy from "spacy";

// export const NLP = async (text: string) => {
//     const recognizeNames = async () => {
//         try {
//           // Load the English language model
//           const nlp = await spacy.load("en_core_web_sm");
  
//           // Analyze the transcribed text
//           const doc = await nlp(text);
  
//           // Extract names from the analyzed text
//           const names = doc.ents.filter((ent: { label_: string; }) => ent.label_ === "PERSON").map((ent: { text: any; }) => ent.text);
  
//           // If names are found, set the first name in the state
//           if (names.length > 0) {
//             return names[0];
//           }
//         } catch (error) {
//           console.error("Error recognizing names:", error);
//           return null;
//         }
//       };
  
//       // Call the recognizeNames function when transcribedText changes
//       const name = recognizeNames();
//       return name;
//   };