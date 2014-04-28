<?php
//if (!defined("IS_OUR_SITE")){die ("<h1>Direct access to this location is prohibited!</h1>");}


function css_browser_selector($ua=null){
		$ua = ($ua) ? strtolower($ua) : strtolower($_SERVER['HTTP_USER_AGENT']);
		$ua_accept = strtolower($_SERVER['HTTP_ACCEPT']);
		$ua_all = strtolower($_SERVER['ALL_HTTP']);

		$g = 'gecko';
		$w = 'webkit';
		$s = 'safari';
		$b = array();
		// browser specs
		if(!preg_match('/opera|webtv/i', $ua) && preg_match('/msie\s(\d+)/', $ua, $array)) {
			$b[] = 'ie ie' . $array[1];

			$iev = $array[1];
			if ($iev < 10) { $b[] = 'ltie10'; }
			if ($iev < 9) { $b[] = 'ltie9'; }
			if ($iev < 8) { $b[] = 'ltie8'; }
		} else {
						$b[] = 'no-ie';
		}
		if((strstr($ua, 'windows nt 6.1'))||(strstr($ua, 'windows 7'))) {$b[] = 'win-7';}
		if((strstr($ua, 'windows nt 6.0'))||(strstr($ua, 'windows vista'))) {$b[] = 'win-vista';}
		if((strstr($ua, 'windows nt 5.1'))||(strstr($ua, 'windows xp'))) {$b[] = 'win-xp';}
		if (strstr($ua, 'windows nt 5.2')) {$b[] = 'win-2003';}
		if((strstr($ua, 'windows nt 5.0'))||(strstr($ua, 'windows 2000'))) {$b[] = 'win-2000';}
		if((strstr($ua, 'windows 98'))||(strstr($ua, 'win98'))) {$b[] = 'win-98';}
		if((strstr($ua, 'windows 95'))||(strstr($ua, 'win95'))||(strstr($ua, 'windows_95'))) {$b[] = 'win-95';}

		if(preg_match('/firefox(\s|\/)(\d+)/', $ua, $array)){$b[] = 'ff ff' . $array[2];
		}
		else if(strstr($ua, 'gecko/')){$b[] = $g;
		}
		else if(preg_match('/opera(\s|\/)(\d+)/', $ua, $array)){$b[] = 'opera opera' . $array[2];
		}
		else if(preg_match('/iemobile(\s| )(\d+)/', $ua, $array)){$b[] = 'iem iem' . $array[2]; $mobile=true;
		}
		else if(preg_match('/mobileexplorer(\s|\/)(\d+)/', $ua, $array)){$b[] = 'iem iem' . $array[2]; $mobile=true;
		}
		else if(preg_match('/ubuntu(\s|\/)(\d+)/', $ua, $array)){$b[] = 'ubuntu ubuntu' . $array[2];
		}
		else if(strstr($ua, 'konqueror')) {$b[] = 'konqueror';
		}
		else if(preg_match('/chrome(\s|\/)(\d+)/', $ua, $array)){$b[] = $w . ' ' . $s . ' chrome chrome'. $array[2];
		}
		else if(strstr($ua, 'iron')){$b[] = $w . ' ' . $s . ' iron';
		}
		else if(strstr($ua, 'applewebkit/')){$b[] = (preg_match('/version\/(\d+)/i', $ua, $array)) ? $w . ' ' . $s . ' ' . $s . $array[1] : $w . ' ' . $s;
		}

		if(strstr($ua, 'mozilla/')){$b[] = $g;
		}



		// platform         specs
		if (preg_match('/(j2me|mini 9.5|vx1000|lge |m800|e860|u940|ux840|compal|wireless| mobi|ahong|lg380|lgku|lgu900|lg210|lg47|lg920|lg840|lg370|sam-r|mg50|s55|g83|t66|vx400|mk99|d615|d763|el370|sl900|mp500|samu3|samu4|vx10|xda_|samu5|samu6|samu7|samu9|a615|b832|m881|s920|n210|s700|c-810|_h797|mob-x|sk16d|848b|mowser|s580|r800|471x|v120|rim8|c500foma:|160x|x160|480x|x640|t503|w839|i250|sprint|w398samr810|m5252|c7100|mt126|x225|s5330|s820|htil-g1|fly v71|s302|-x113|novarra|k610i|-three|8325rc|8352rc|sanyo|vx54|c888|nx250|n120|mtk |c5588|s710|t880|c5005|i;458x|p404i|s210|c5100|teleca|s940|c500|s590|foma|samsu|vx8|vx9|a1000|_mms|myx|a700|gu1100|bc831|e300|ems100|me701|me702m-three|sd588|s800|8325rc|ac831|mw200|brew |d88|htc\/|htc_touch|355x|m50|km100|d736|p-9521|telco|sl74|ktouch|m4u\/|me702|8325rc|kddi|phone|lg |sonyericsson|samsung|240x|x320|vx10|nokia|sony cmd|motorola|up.browser|up.link|mmp|symbian|smartphone|midp|wap|vodafone|o2|pocket|mobile|psp|treo|j-phone)/i',$ua)) {$mobile=true;
		}
		if ((strpos($ua_accept,'application/vnd.wap.xhtml+xml') > 0) or ((isset($_SERVER['HTTP_X_WAP_PROFILE']) or isset($_SERVER['HTTP_PROFILE'])))) {$mobile=true;
		}
		if(strstr($ua, '/(pre\/|palm os|palm|hiptop|avantgo|plucker|xiino|blazer|elaine)/')) {$b[] = 'palm'; $mobile=true; //test this on palm device
		}
		if(strstr($ua, 'touch')) {$b[] = 'touch';
		}
		if(strstr($ua, 'kindle')) {$b[] = 'kindle'; $mobile=false;
		}
		if(strstr($ua, 'silk')) {$b[] = 'kindle'; $mobile=false;
		}
		if(strstr($ua, 'iphone')) {$b[] = 'iphone'; $mobile=true;
		}
		if(strstr($ua, 'ipod')) {$b[] = 'ipod'; $mobile=true;
		}
		if(strstr($ua, 'ipad')) {$b[] = 'ipad'; $mobile=false;
		}
		if((strstr($ua, 'android')) && (!strstr($ua, 'mobile')) ) {$b[] = 'android'; $mobile=false;
		}
		if((strstr($ua, 'android')) && (strstr($ua, 'mobile')) ) {$b[] = 'android'; $mobile=true;
		}
		if(strstr($ua, 'blackberry')) {$b[] = 'bberry'; $mobile=true;
		}
		if(strstr($ua, 'opera mini')) {$b[] = 'opera-mini'; $mobile=true;
		}
		if(strstr($ua, 'opera mobi')) {$b[] = 'opera-mobi'; $mobile=true;
		}
		if((strstr($ua, 'mac')) && (!strstr($ua, 'like mac'))) {$b[] = 'mac';
		}
		if(strstr($ua, 'darwin')) {$b[] = 'mac';
		}
		if(strstr($ua, 'webtv')) {$b[] = 'webtv';
		}
		if(strstr($ua, 'win')) {$b[] = 'win';
		}
		if(strstr($ua, 'freebsd')) {$b[] = 'freebsd';
		}
		if(strstr($ua, 'x11') || strstr($ua, 'linux')) {$b[] = 'linux';
		}
		if($mobile) {$b[] = 'mobile';}
						else {$b[] = 'desktop';
		}

return join(' ', $b);
}


?>