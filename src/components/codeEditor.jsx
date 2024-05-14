import {Box} from "@chakra-ui/react";
import {Editor} from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./languageselector";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState('');
  const [language, setLanguage] = useState('python');
  
  const onMount = (editor) =>{
    editorRef.current = editor;
    editor.focus();
  };

  const onselect = (language)=>{
    setLanguage(language);
  };

   return(
    <Box>
    <LanguageSelector language={language}
      onSelect={onselect}/>
      <Editor 
       height="75vh"
       theme="VS-Dark"
       language={language}
       defaultLanguage="python"
       defaultValue="#Comment"
       onMount = {onMount}
       value={value}
       onChange={(value)=> setValue(value)}
       />;     
    </Box>
  )
}

export default CodeEditor