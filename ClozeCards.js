var ClozeCards = function Clozecard(text, cloze) {
  this.cloze = cloze;
  this.fullText = text;
  this.partial = function(){
    var str = this.fullText;
    var str1 = this.fullText;
    var clz = this.cloze;
    var pos = parseInt(str.search(clz));
       if ( pos >= 0){
         str = str.substr(0,pos);
         str = str + "...";
         str = str + str1.substr(pos+parseInt(clz.length));
         return str;
        } else{
            return false;
        }
  }
}     
module.exports = ClozeCards;