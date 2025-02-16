import FaqForm from "./FaqForm";

const NewQuestion = () => {
  return <FaqForm />;
};

// send new entered data to the backend
// export async function action({request, params }) {
//   const data = await request.formData();
//   const enteredFaq = {
//     question: data.get("question"),
//     answer: data.get("answer"),
//   };

//   const response = await fetch("url", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(enteredFaq),
//   });

//   // handle errors
// }

export default NewQuestion;
