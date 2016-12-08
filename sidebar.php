	<div class="m-nav">
		<!-- 分类列表 -->
		<ul class="u-nav">
			<h5>文章分类</h5>
			<?php wp_list_categories('title_li=0&show_count=0&depth=2'); ?>
		</ul>
		<ul class="u-nav">
			<h5>最新文章</h5>
			<?php
			 $recent_posts = wp_get_recent_posts(array('numberposts'=>5));
			 foreach( $recent_posts as $recent ){
			 	echo '<li><a href="'.get_permalink($recent["ID"]).'">'.$recent["post_title"].'</a></li>';
			 }
			?>
		</ul>
		<ul class="u-nav">
			<h5>标签云</h5>
			<li>
			<?php wp_tag_cloud(array('number'=>5,'unit'=>'px','smallest'=>16,'largest'=>16,'separator'=>'</li><li>'));?>
			</li>
		</ul>
		<ul class="u-nav">
			<h5>文章归档</h5>
			<?php wp_get_archives('type=monthly');?>
		</ul>		
	</div>					