var ClozeCards = function Clozecard(text, cloze) {
  var pos = parseInt(text.search(cloze));
  if ( pos < 0){
    console.log(cloze+" doesn't appear in "+text);
    return false;
  }else{
     this.cloze = cloze;
     this.fullText = text;
     this.partial = partial(this.fullText,this.cloze,pos);
   
     function partial(str,clz,pos){
        var str1 = str;
        str = str.substr(0,pos);
        str = str + "...";
        str = str + str1.substr(pos+parseInt(clz.length));
        return str;
     }
   }

}     
module.exports = ClozeCards;