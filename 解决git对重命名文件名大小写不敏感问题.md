参考：https://blog.csdn.net/u012814856/article/details/99940160

## 问题
文件 Test.js，重命名为test.js，git检测不到文件变化

## 解决
1、先备份Test.js，删除Test.js后提交；再将备份文件重命名该为test.js提交
2、使用git mv
git mv Test.js test.js

