/* http://nyusblog.blogspot.com */  /*<![CDATA[*/
function removeHtmlTag(b,a){if(b.indexOf("<")!=-1){var d=b.split("<");
for(var c=0;c<d.length;c++){if(d[c].indexOf(">")!=-1){d[c]=d[c].substring(d[c].indexOf(">")+1,
d[c].length)}}b=d.join("")}a=(a<b.length-1)?a:b.length-2;while(b.charAt(a-1)!=" "&&b.indexOf(" ",a)!=-1)
{a++}b=b.substring(0,a-1);return b+"..."}function createSummaryAndThumb(d)
{var f=document.getElementById(d);var a="";var b=f.getElementsByTagName("img");var e=summary_noimg;if(b.length>=1)
{a='<span class="GRmorethumb" 
style="overflow:hidden;float:left;width:'+img_thumb_width+"px;height:"+img_thumb_height+'px;">
<img src="'+b[0].src+'" width="'+img_thumb_width+'" height="'+img_thumb_height+'"/>
</span>';e=summary_img}var c=a+"<div>"+removeHtmlTag(f.innerHTML,e)+"</div>";f.innerHTML=c};
/*]]>*/
