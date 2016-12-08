<?php get_header();?> 
<!-- 白纸中部模块 - 文章模块 -->
<div class="g-wrap">	
	<!-- 文章头部模块 -->
	<?php if(have_posts()):the_post();?>	
	<div class="m-head m-head-2">
		<!-- 文章头部模块 - 标题 -->	
		<ul class="m-title">
    		<li class="u-logo"><?php the_title();?></li>
    	</ul>	
	</div>
	<!-- 文章头部模块 - 正文 -->
	<div class="m-body"><?php the_content();?></div>
	<?php endif;?>
	<!-- 文章头部模块 - 底部文章导航 -->
	<div class="u-nav2">
		<?php if(get_previous_post()):$prev_post = get_previous_post();?>
		<h5 class="left"><a href='<?php echo get_permalink($prev_post->ID)?>'><?php echo $prev_post->post_title;?></a></h5>
		<?php endif; ?>
		<?php if(get_next_post()):$next_post = get_next_post();?>		
	    <h5 class="right"><a href='<?php echo the_permalink($next_post->ID);?>'><?php echo $next_post->post_title;?></a></h5>
		<?php endif; ?>		
	</div>
	<!-- 分界线 -->	
	<hr class="u-boundry"/>		
	<?php comments_template();?>	
	<!-- 分界线 -->	
	<hr class="u-boundry"/>		
	<!-- 白纸底部模块 - 分类列表 -->			
	<div><?php get_sidebar();?>	</div>
</div>	
<?php get_footer();?>