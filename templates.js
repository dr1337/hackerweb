(function(a){TEMPLATES={"comments-toggle":new a(function(a,b,c){var d=this;return d.b(c=c||""),d.b('<button class="comments-toggle">'),d.b(d.v(d.f("comments_count",a,b,0))),d.b(" "),d.b(d.v(d.f("i_reply",a,b,0))),d.b("</button>"),d.fl()}),comments:new a(function(a,b,c){var d=this;return d.b(c=c||""),d.s(d.f("comments",a,b,1),a,b,0,13,130,"{{ }}")&&(d.rs(a,b,function(a,b,c){c.b('<li><p class="metadata"><b>'),c.b(c.v(c.f("user",a,b,0))),c.b("</b> <time>"),c.b(c.v(c.f("time_ago",a,b,0))),c.b("</time></p><p>"),c.b(c.t(c.f("content",a,b,0))),c.b("<ul>"),c.b(c.rp("comments_list",a,b,"")),c.b("</ul></li>")}),a.pop()),d.fl()}),"post-comments":new a(function(a,b,c){var d=this;return d.b(c=c||""),d.b('<div class="post-content"><header><h1><a href="'),d.b(d.v(d.f("url",a,b,0))),d.b('" target="_blank">'),d.b(d.t(d.f("title",a,b,0))),d.b("<br>"),d.s(d.f("user",a,b,1),a,b,0,96,159,"{{ }}")&&(d.rs(a,b,function(a,b,c){c.s(c.f("domain",a,b,1),a,b,0,107,148,"{{ }}")&&(c.rs(a,b,function(a,b,c){c.b('<span class="link-text">'),c.b(c.v(c.f("domain",a,b,0))),c.b("</span>")}),a.pop())}),a.pop()),d.b('</a></h1><p class="metadata">'),d.s(d.f("user",a,b,1),a,b,0,206,400,"{{ }}")&&(d.rs(a,b,function(a,b,c){c.b('<span class="inline-block">'),c.b(c.v(c.f("points",a,b,0))),c.b(" "),c.b(c.v(c.f("i_point",a,b,0))),c.b(" by "),c.b(c.v(c.f("user",a,b,0))),c.b('</span><span class="inline-block">'),c.b(c.v(c.f("time_ago",a,b,0))),c.s(c.f("comments_count",a,b,1),a,b,0,332,374,"{{ }}")&&(c.rs(a,b,function(a,b,c){c.b(" &middot; "),c.b(c.v(c.f("comments_count",a,b,0))),c.b(" "),c.b(c.v(c.f("i_comment",a,b,0)))}),a.pop()),c.b("</span>")}),a.pop()),d.s(d.f("user",a,b,1),a,b,1,0,0,"")||(d.b('<span class="inline-block">'),d.b(d.v(d.f("time_ago",a,b,0))),d.b("</span>")),d.b("</p></header>"),d.s(d.f("content",a,b,1),a,b,0,498,644,"{{ }}")&&(d.rs(a,b,function(a,b,c){c.b('<section class="grouped-tableview">'),c.b(c.t(c.f("content",a,b,0))),c.b('<ul class="poll">'),c.s(c.f("poll",a,b,1),a,b,0,572,620,"{{ }}")&&(c.rs(a,b,function(a,b,c){c.b("<li><b>"),c.b(c.v(c.f("points",a,b,0))),c.b("</b> "),c.b(c.v(c.f("i_point",a,b,0))),c.b(": "),c.b(c.v(c.f("item",a,b,0))),c.b("</li>")}),a.pop()),c.b("</ul></section>")}),a.pop()),d.b('</div><section class="comments">'),d.s(d.f("has_comments",a,b,1),a,b,0,705,732,"{{ }}")&&(d.rs(a,b,function(a,b,c){c.b("<ul>"),c.b(c.rp("comments_list",a,b,"")),c.b("</ul>")}),a.pop()),d.s(d.f("has_comments",a,b,1),a,b,1,0,0,"")||d.b('<p class="no-comments">No comments.</p>'),d.b("</section>"),d.fl()}),post:new a(function(a,b,c){var d=this;return d.b(c=c||""),d.b('<li id="story-'),d.b(d.v(d.f("id",a,b,0))),d.b('" class="post-'),d.b(d.v(d.f("type",a,b,0))),d.b('"><a href="'),d.b(d.v(d.f("url",a,b,0))),d.b('" '),d.s(d.f("disclosure",a,b,1),a,b,0,77,93,"{{ }}")&&(d.rs(a,b,function(a,b,c){c.b('class="pad-right')}),a.pop()),d.b('"><div class="number">'),d.b(d.v(d.f("i",a,b,0))),d.b('.</div><div class="story"><b>'),d.b(d.t(d.f("title",a,b,0))),d.b("</b>"),d.s(d.f("user",a,b,1),a,b,0,188,480,"{{ }}")&&(d.rs(a,b,function(a,b,c){c.b('<span class="metadata">'),c.s(c.f("domain",a,b,1),a,b,0,222,267,"{{ }}")&&(c.rs(a,b,function(a,b,c){c.b('<span class="link-text">'),c.b(c.v(c.f("domain",a,b,0))),c.b("</span><br>")}),a.pop()),c.b('<span class="inline-block">'),c.b(c.v(c.f("points",a,b,0))),c.b(" "),c.b(c.v(c.f("i_point",a,b,0))),c.b(" by "),c.b(c.v(c.f("user",a,b,0))),c.b('</span> <span class="inline-block">'),c.b(c.v(c.f("time_ago",a,b,0))),c.s(c.f("comments_count",a,b,1),a,b,0,405,447,"{{ }}")&&(c.rs(a,b,function(a,b,c){c.b(" &middot; "),c.b(c.v(c.f("comments_count",a,b,0))),c.b(" "),c.b(c.v(c.f("i_comment",a,b,0)))}),a.pop()),c.b("</span></span>")}),a.pop()),d.s(d.f("user",a,b,1),a,b,1,0,0,"")||(d.b('<span class="metadata"><span class="inline-block">'),d.b(d.v(d.f("time_ago",a,b,0))),d.b("</span></span>")),d.b("</div></a>"),d.s(d.f("disclosure",a,b,1),a,b,0,608,675,"{{ }}")&&(d.rs(a,b,function(a,b,c){c.b('<a href="#/item/'),c.b(c.v(c.f("id",a,b,0))),c.b('" class="detail-disclosure"><span></span></a>')}),a.pop()),d.b("</li>"),d.fl()})}})(Hogan.Template)