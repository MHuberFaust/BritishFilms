

var MyBanners = new Array["godfather.jpeg","city_of_god.jpeg","schindlers_list.jpeg","fight_club.jpeg"];
var MyBannerLinks=new Array["youtube.com/watch?v=5DO-nDW43Ik","youtube.com/watch?v=yJdW1TevoyA","youtube.com/watch?v=JdRGC-w9syA","youtube.com/watch?v=-Th5pD5lIOM"];
var banner=0;
function ShowLinks(){
document.location.href="http://www.”+MyBannerLinks[banner]"
}

function ShowBanners()
{ if (document.images)
{ banner++
if (banner==MyBanners.length) {
banner=0}
document.ChangeBanner.src=MyBanners[banner]
setTimeout("ShowBanners()",5000)
}
}