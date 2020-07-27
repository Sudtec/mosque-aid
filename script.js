const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const download = document.getElementById('generate-dp');

function getInputValue()
{
    var inputVal = document.getElementById('Mname').value;

    canvas.width = 1080;
    canvas.height = 1080;

    const centreX = canvas.width/2;
    const centreY = canvas.height/2;

    const frame = document.getElementById('frame');
    ctx.drawImage(frame,0,0);
    ctx.textAlign = 'center';
    ctx.font = 'bold 31px BentonModDisp';
    ctx.fillText(`${inputVal}`,frame.width/2,800);

    if(window.navigator.msSaveBlob){
        window.navigator.msSaveBlob(canvas.msToBlob(),'OFI_Eid.png');
    } else {
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.href = canvas.toDataURL();
        a.download = 'OFI_Eid_`${inputVal}`.png';
        a.click();
        document.body.removeChild(a);
    }
}