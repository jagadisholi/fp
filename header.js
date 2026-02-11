function updateDateTime() {
  const now = new Date();
  const el = document.getElementById("dateTime");
  if (!el) return;
  el.innerHTML = now.toLocaleDateString('en-US',{weekday:'long', year:'numeric', month:'long', day:'numeric'}) + " " + now.toLocaleTimeString();
}

function updateNepalDateTime() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const nptOffsetMinutes = 5 * 60 + 45;
  const npt = new Date(utc + nptOffsetMinutes * 60000);
  const el = document.getElementById('nepalDateTime');
  if (!el) return;
  const optsDate = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const optsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  el.textContent = npt.toLocaleDateString('en-GB', optsDate) + ' ' + npt.toLocaleTimeString('en-GB', optsTime) + ' (NPT)';
}

// start timers (safe to call multiple times)
setInterval(updateDateTime, 1000);
updateDateTime();
// Nepal short-form removed — only main dateTime is used below the contact bar.
