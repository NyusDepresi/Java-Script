<!-- NYUS no live link -->
<script type='text/javascript'>
//<![CDATA[
function blockLinks(parentID, children) {
    var parent = document.getElementById(parentID),
        content = parent.getElementsByTagName(children);
    for (var i = 0; i < content.length; i++) {
        if (content[i].innerHTML.indexOf('</a>') !== -1) {
            content[i].innerHTML = "<mark>No live link!!!</mark> Terima kasih atas perhatiannya!";
            content[i].className = "spammer-detected";
        }
    }
} 
blockLinks('comment-holder', 'p');
//]]>
</script>
<!-- NYUS no live link END -->
