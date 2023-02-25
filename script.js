//your code here
let text=document.getElementById('evaluatedText');
let header=document.getElementById('wordCount');
text.addEventListener('keyup',function(){
        let sentence=text.value;
 
        let count=0, flag=false;
        for(let i=0;i<sentence.length;i++){
                if(sentence[i]==" "){
                        count=count+1;
                }
                if(sentence[sentence.length-1]==" "){
                        flag=true;
                }
        }
        if(flag==false){
                count=count+1;
        }
        header.innerHTML=count;
        if(sentence.length==0){
                header.innerHTML=0;
        }
});
header.innerHTML=0;
 
