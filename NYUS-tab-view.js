<script type='text/javascript'>
//<![CDATA[
function NYUStab_view_aux(m, k) {
    var l = document.getElementById(m);
    var n = l.firstChild;
    while (n.className != "tabs") {
        n = n.nextSibling
    }
    var i = n.firstChild;
    var o = 0;
    do {
        if (i.tagName == "A") {
            o++;
            i.href = "javascript:NYUStab_view_switch('" + m + "', " + o + ");";
            i.className = (o == k) ? "Active": "";
            i.blur()
        }
    } while (i = i.nextSibling);
    var p = l.firstChild;
    while (p.className != "FTs") {
        p = p.nextSibling
    }
    var j = p.firstChild;
    var o = 0;
    do {
        if (j.className == "FT") {
            o++;
            if (p.offsetHeight) {
                j.style.height = (p.offsetHeight - 2) + "px"
            }
            j.style.overflow = "auto";
            j.style.display = (o == k) ? "block": "none"
        }
    } while (j = j.nextSibling)
}
function NYUStab_view_switch(d, c) {
    NYUStab_view_aux(d, c)
}
function NYUStab_view_initialize(b) {
    NYUStab_view_aux(b, 1)
};
//]]>
</script>
