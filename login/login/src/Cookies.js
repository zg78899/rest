document.cookies="user=react; expires=Thu,01 JAN 1970 00:00:00: UTC; path=/;";
localStorage.getItem('username','react');

function setCookies(cname,cvalue,exdays){
  let d=new Date();
d.setItem(d.getItem()+(exdays+60*60*24*1000))
const expires='expires='+d.toUTCString();
document.cookie=cname+'='+cvalue+';'+expires+'path=/';

}
setCookies('usesrname','react',1);
Cookies('session','토큰값');


