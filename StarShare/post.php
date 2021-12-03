<!-- post -->

<?php
function postElement($username, $posttitle, $postcontent, $postimage){
$element = "

			<form action=\"\" method=\"post\">
				<div class=\"column\">
				<div class=\"card\">
				<img src=$postimage alt=\"Image\" class=\"cardhome-image\">
				<h2>$productname</h2>
				<p>$postcontent</p>
				<a class=\"username\" onclick=\"\" >$username</a>
				<a class=\"share\" onclick=\"\" ><i class=\"fa fa-share fa-lg\"></i> Share</a>
				</div>
				</div>
				</form>	

";
echo  $element;
}

?>