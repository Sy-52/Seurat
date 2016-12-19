<?php get_header();?> 
<!-- 博客中间模块 - 白纸 -->
<div class="g-wrap">	
	<!-- 白纸头部模块 - 博客介绍 -->
	<div class="m-head">
		<!-- 博客介绍 - 标题和一言API -->
		<ul class="m-title">
    		<li class="u-logo"><?php bloginfo('name');?></li>
   			<li id="hitokoto" style="margin-left:20px;color:#999;font-size:14px;font-weight:bold;"></li>
   			<!-- 从"一言"服务器获取一句话 -->
    	</ul>	
    	<!-- 博客介绍 - 个人信息导航 -->
    	<ul class="u-nav"> 	
    		<li><a href="#" target="_blank">简历</a></li>
    		<li><a href="https://github.com/Sy-52" target="_blank">GitHub</a></li>
    	</ul>
    	<!-- 博客介绍 - 主体介绍 -->
    	<p>每当我找不到存在的意义，每当我迷失在黑夜里。</p>
	</div>
	<!-- 分界线 -->
	<hr class="u-boundry"/>	
	<!-- 白纸中部模块 - 文章列表 -->	
	<ul class="m-list">
		<?php while(have_posts()):the_post();?>
		<li class="u-post">
			<h5><a href="<?php the_permalink();?>"><?php the_title();?></a></h5>
			<div class="u-tag"><?php the_tags();?></div>
			<?php the_content();?>
		</li>
		<?php endwhile;?>
	</ul>
	<!-- 分界线 -->	
	<hr class="u-boundry"/>	
	<!-- 白纸底部模块 - 分类列表 -->		
	<?php get_sidebar();?>	
</div>	
<?php get_footer();?>