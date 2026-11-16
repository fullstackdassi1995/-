const {chromium}=require('playwright');const fs=require('fs');
(async()=>{
 const [,,out,w,h,fps,dur,query]=process.argv;
 fs.mkdirSync(out,{recursive:true});
 const b=await chromium.launch();const p=await b.newPage({viewport:{width:+w,height:+h}});
 await p.goto('file://'+__dirname+'/logo.html?t=0&'+(query||''));
 const n=Math.round(+fps*+dur);
 for(let i=0;i<n;i++){await p.evaluate(t=>setT(t),i/+fps);
  await p.screenshot({path:`${out}/f${String(i).padStart(4,'0')}.png`});}
 await b.close();
})();
