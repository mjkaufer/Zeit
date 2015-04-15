[1mdiff --git a/lib/databases.js b/lib/databases.js[m
[1mindex 498dfe1..54b87c1 100644[m
[1m--- a/lib/databases.js[m
[1m+++ b/lib/databases.js[m
[36m@@ -13,4 +13,17 @@[m [mif (Meteor.isServer) {[m
     Meteor.publish("posts", function() {[m
         return Posts.find({});[m
     })[m
[31m-}[m
\ No newline at end of file[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/*[m
[32m+[m[32mSchemas[m
[32m+[m
[32m+[m	[32mNewspapers[m
[32m+[m	[32m{[m
[32m+[m		[32mactive:true/false,[m
[32m+[m		[32mmonth:month[m
[32m+[m		[32myear:year[m
[32m+[m
[32m+[m	[32m}[m
[32m+[m
[32m+[m[32m*/[m
\ No newline at end of file[m
