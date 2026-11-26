t=open('template.html',encoding='utf-8').read()
r=lambda f:open(f,encoding='utf-8').read().strip()
import json
for k,f in [('__DATA__','mobs.v2.json'),('__EQ__','equip.json'),('__MQ__','main_zh.json'),('__SQ__','side_zh.json'),('__EO__','eo_points.json'),('__DG__','dungeons_zh.json'),('__ARGO__','argo_data.json')]:
    t=t.replace(k,json.dumps(json.loads(r(f)),ensure_ascii=False,separators=(',',':')))
open('index.html','w',encoding='utf-8').write(t)
