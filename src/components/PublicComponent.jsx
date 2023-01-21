import React, { useContext, useState } from 'react';
import MarkdownComponent from './MarkedownComponent';
import ArticleModal from './ArticleModal';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const markdown = `
# The Pop Quiz Is the Answer—Building Better Memory through Re-Testing

##### REPETITION IS KEY WHEN IT COMES TO RETENTION
---
##### By [Richard Restak, MD,](https://www.wondrium.com/richard-restak?utm_source=US_TGCDaily&utm_medium=TGCDaily&utm_campaign=145245 "Richard Restak, MD") [The George Washington University School of Medicine and Health Sciences](https://smhs.gwu.edu/ "The George Washington University School of Medicine and Health Sciences")  

---

**Edited by Kate Findley and proofread by Angela Shoemaker, Wondrium Daily**

#### **Do you remember those ornery professors who subjected you to pop quizzes? Most annoying of all were those professors who re-tested you. It turns out they were onto something, according to neuroscience research. Dr. Restak explains.**  
  
  
![Neuroscience research shows repeated testing of learned information helps turn that information into long-term memory by recalling it over and over while learning it. Photo by Cincila / Shutterstock](https://www.wondriumdaily.com/wp-content/uploads/2020/05/PopQuiz-Feature-1024x555.jpg)
>  Neuroscience research shows repeated testing of learned information helps turn that information into long-term memory by recalling it over and over while learning it. Photo by Cincila / Shutterstock

### **Repeated Memory Testing**

One way to strengthen your short-term memory is through repeated testing. Tests should include old as well as new material.

Research done by Jeffrey Karpicke and Henry Roediger at Purdue University, first described in Science in 2008, found that repeated testing is more effective for long-term learning than additional study. Practicing retrieval during tests results in greater learning than study alone.

It’s better to go back and re-test than it is to just keep studying the same concepts over and over. Even after the item has been learned, the best way to remember it is by re-testing.

This is because the neuronal networks, called cell assemblies by Canadian psychologist Donald Hebb, are strengthened each time the memory is retrieved. It’s similar to physical training. After you build up a muscle or muscle group, you have to keep exercising it or it will undergo disuse atrophy. 

### **Value in Repetition**

“Similar results have been found in my own field of neurology,” Dr. Restak said. “I teach medical students. They remembered more about neurological illnesses when they were repeatedly tested rather than the usual sequence of learning it, cramming it in overnight, and so forth.”

According to Dr. Restak, repeated memory testing helps students to better retain the information and to prepare them for a career as a neurologist, where they must be able to recall details about a wide range of neurological conditions at a moment’s notice. On the job, they would not have the convenience of being able to study a condition or spend hours reading about it before treating the patient.

“This has to be part of their permanent repertoire, and the only way to do that is to be re-tested on it,” Dr. Restak said. “As patients come in over the years, that’s the form of re-testing that they’ll be exposed to.”

### **Working Memory**

Short-term memory is often sufficient to rehearse a phone number, dial it, and forget it. In order to store information in your brain for a longer period of time, though, you need to focus on it intently or manipulate it. 

For example, if you need to memorize items on a grocery list, you can compare them to what you remember in your cabinets at home. This kind of memory, where you manipulate information, is called working memory. 

In this form of memory, you’re not just going back and linking things up in a linear manner; instead, you’re moving them around. Naming all the players on your favorite baseball team would be an example of general memory. Having to state which position they’re in or who came on the team first, though, would be an example of working memory. 

According to Dr. Restak, working memory is the most important memory process of all and an element we should definitely keep sharp throughout our lifespan in order to optimize brain function. Relying on our brains instead of using technology to memorize important items, repeated memory testing, engaging in in-depth learning, and challenging ourselves with memory exercises such as the digit span are all ways we can strengthen our memory and keep our brain healthy.



`;
const PublicComponent = () => {
   const [formValue, setFormValue] = useState(markdown);
   const showToastMessageSucess = () => {
     toast('🦄 Wow so easy!', {
       position: 'top-center',
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: 'light',
     });
   };
   const onChange = (e) => {
     setFormValue(e.target.value);
   };

  return (
    <div className='App'>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <ArticleModal />
      <MarkdownComponent formValue={formValue} />
      <button onClick={showToastMessageSucess} style={{ marginBottom: '2rem' }} className='btn btn-secondary'>
        Pop Quiz
      </button>
      <Link to={`/demo/1`}>
        <button style={{ marginBottom: '2rem' }} className='btn btn-primary'>
          Pop Quiz
        </button>
      </Link>
    </div>
  );
};

export default PublicComponent;
