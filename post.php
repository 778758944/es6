<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-04 15:59:14
 * @version $Id$
 */
$name=$_POST['name'];
echo json_encode(array(name=>$name));
?>