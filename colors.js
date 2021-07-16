var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i =0;
    while(i<alist.length){
      alist[i].style.color=color;
      i+=1;
    }
  }
}

var Body = {
  setColor:function(color){
    document.querySelector('body').style.color=color;
  },
  SetBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor=color;
  }
}
function nightDayHandler(self){
  if(document.querySelector('body').dataset.mode==='day'){
  Body.SetBackgroundColor('black');
  Body.setColor('white');
  document.querySelector('body').dataset.mode='night';
  self.value='day';

  Links.setColor('powderblue');

}else{
  Body.SetBackgroundColor('white');
  Body.setColor('black');
  document.querySelector('body').dataset.mode='day';
  self.value='night';

  Links.setColor('blue');
}
}
