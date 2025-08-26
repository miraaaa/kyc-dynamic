import QuestionText from "./QuestionText";
import QuestionTextarea from "./QuestionTextarea";
import QuestionRadio from "./QuestionRadio";
import QuestionMultiChoice from "./QuestionMultiChoice";
import QuestionSelect from "./QuestionSelect";
import QuestionDate from "./QuestionDate";
import QuestionFile from "./QuestionFile";

const QUESTION_COMPONENTS = {
  text: QuestionText,
  textarea: QuestionTextarea,
  radio_buttons: QuestionRadio,
  multi_choice: QuestionMultiChoice,
  drop_down: QuestionSelect,
  date: QuestionDate,
  file: QuestionFile,
};


export default function renderQuestion(schema, props) {
  const Comp = QUESTION_COMPONENTS[schema.type];
  return Comp ? <Comp key={schema.id} schema={schema} {...props} /> : <div key={schema.id}>Unknown type {schema.type}</div>;
}
