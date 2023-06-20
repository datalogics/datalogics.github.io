
document.addEventListener("DOMContentLoaded", function(){getContent()});

function langSelector() {
    document.getElementById("langDrop").classList.toggle("show");
}

function verSelector() {
    document.getElementById("verDrop").classList.toggle("show");
}

function goToPage(ver) {
    lang = document.getElementById("langDrop").value
    if ((lang != "") || (lang != "-") || (ver != "") || (ver != "-")) {
        // window.top.location.href = "datalogics.github.io/" + lang + "/" + ver + "/index.html"
        window.top.location.href = lang + "/" + ver + "/index.html"
    }
} 

function changeResult(lang) {
var verDict = {'DotNet': ['APDFL18.0.4PlusP1z'], 'CPlusPlus': ['APDFL18.0.4PlusP1u', 'APDFL18.0.4PlusP1s', 'APDFL18.0.4PlusP1y', 'APDFL18.0.4PlusP1z'], 'apdfl18': ['aslayer_ASDate.htm', 'pdlayer_PDCollectionSchema.htm', 'coslayer_PDDoc.htm', 'pdlayer_PDLinkAnnot.htm', 'pdelayer_PDEXObject.htm', 'pdlayer_PDFolder.htm', 'styles.css', 'pdelayer_PDESoftMask.htm', 'dlextras_Metadata.htm', 'pdfllayer_CosDoc.htm', 'dlextras_PDETextItem.htm', 'pdfllayer_General.htm', 'dlextras_PDPage.htm', 'pdelayer_PDEGroup.htm', 'pdelayer_PDEImageJPX.htm', 'pdelayer_PDEForm.htm', 'acrocolor_acrocolor.htm', 'pdelayer_PDEText.htm', 'pdlayer_PDViewDest.htm', 'pdlayer_PDEObject.htm', 'pdelayer_Dump.htm', 'pdelayer_PDEObject.htm', 'aslayer_HFTServer.htm', 'pdlayer_PDPref.htm', 'TOC.htm', 'pdfllayer_PDFontDownloadContext.htm', 'pdfllayer_PDFLPrint.htm', 'coslayer_CosStream.htm', 'dlextras_PDFont.htm', 'dlextras_PDSysFont.htm', 'aslayer_ASAtom.htm', 'pdelayer_PDEImageFlate.htm', 'coslayer_CosNumber.htm', 'plugins_pdfprocessor.htm', 'pdelayer_PDEPlace.htm', 'coslayer_CosBoolean.htm', 'pdelayer_PDEExtGState.htm', 'pdlayer_PDNameTree.htm', 'aslayer_ASPlatformPath.htm', 'pdslayer_PDSRoleMap.htm', 'pdlayer_PDWord.htm', 'pdlayer_PDFLPrint.htm', 'pdlayer_PDFileSpec.htm', 'index.htm', 'coslayer_CosCrypt.htm', 'pdlayer_PDActionHandler.htm', 'pdlayer_PDBookmark.htm', 'aslayer_ASFileSys.htm', 'pdlayer_PDBead.htm', 'pdelayer_PDEDeviceNColors.htm', 'pdlayer_PDNumTree.htm', 'pdfllayer_PDPage.htm', 'pdlayer_Metadata.htm', 'pdlayer_PDStyle.htm', 'pdelayer_PDEGraphicFont.htm', 'pdelayer_PDEPattern.htm', 'coslayer_CosString.htm', 'aslayer_ASExtension.htm', 'aslayer_ASTimeSpan.htm', 'coslayer_CosDoc.htm', 'coslayer_General.htm', 'dlextras_PDEGraphicFont.htm', 'pdelayer_PDEContent.htm', 'pdfllayer_PDFont.htm', 'pdelayer_PDSysEncoding.htm', 'dlextras_PDEText.htm', 'aslayer_ASStm.htm', 'pdlayer_PDOCConfig.htm', 'pdslayer_General.htm', 'dlextras_PDEImage.htm', 'dlextras_PDEForm.htm', 'pdlayer_PDTextSelect.htm', 'plugins_xps2pdf.htm', 'pdelayer_PDEUnknown.htm', 'aslayer_General.htm', 'pdelayer_PDEColorSpace.htm', 'pdlayer_PDOCMD.htm', 'pdslayer_PDSClassMap.htm', 'pdelayer_PDEClip.htm', 'aslayer_ASFixed.htm', 'aslayer_HFT.htm', 'pdelayer_PDEPS.htm', 'aslayer_ASCab.htm', 'aslayer_ASMem.htm', 'pdfllayer_PDPref.htm', 'pdlayer_PDFileAttachment.htm', 'dlextras_PDEPath.htm', 'pdelayer_PDEBeginGroup.htm', 'pdelayer_PDEXGroup.htm', 'aslayer_ASException.htm', 'pdlayer_PDRedaction.htm', 'dlextras_PDWord.htm', 'pdlayer_ASFileAttachment.htm', 'pdelayer_PDEImage.htm', 'pdelayer_PDEShading.htm', 'pdlayer_PDOCG.htm', 'dlextras_PDEPS.htm', 'dlextras_General.htm', 'pdslayer_PDSMC.htm', 'pdlayer_PDAnnot.htm', 'dlextras_PDEFont.htm', 'pdfllayer_pdflattener.htm', 'pdlayer_PDTextAnnot.htm', 'pdlayer_PDCrypt.htm', 'pdlayer_PDEFont.htm', 'dlextras_PDDoc.htm', 'pdslayer_PDSElement.htm', 'pdlayer_General.htm', 'pdelayer_PDEEndContainer.htm', 'dlextras_PDEContent.htm', 'dlextras_CosStream.htm', 'pdlayer_PDTrans.htm', 'pdslayer_PDSTreeRoot.htm', 'coslayer_CosArray.htm', 'pdlayer_PDCollection.htm', 'coslayer_CosName.htm', 'pdfllayer_ASMem.htm', 'pdelayer_PDETextItem.htm', 'pdelayer_JPXColorSpace.htm', 'coslayer_CosObjCollection.htm', 'plugins_pdflattener.htm', 'pdelayer_PDEElements.htm', 'pdlayer_PDPage.htm', 'pdlayer_PDDoc.htm', 'dlextras_PDPref.htm', 'pdlayer_PDAnnotHandler.htm', 'pdlayer_PDAction.htm', 'pdfllayer_ASFileSys.htm', 'pdlayer_PDThread.htm', 'pdlayer_PDWordFinder.htm', 'pdfllayer_ASExtension.htm', 'DL-Full-Logo-DarkBG-Blue.svg', 'pdlayer_PDPageLabel.htm', 'pdelayer_PDSysFont.htm', 'coslayer_CosObj.htm', 'pdelayer_PDEBeginContainer.htm', 'aslayer_ASDouble.htm', 'pdelayer_PDEFont.htm', 'aslayer_ASFile.htm', 'pdelayer_General.htm', 'dlextras_JPXColorSpace.htm', 'pdfllayer_PDTextSelect.htm', 'aslayer_ASCryptStm.htm', 'pdelayer_PDEContainer.htm', 'aslayer_ASCalendarTimeSpan.htm', 'pdelayer_PDEElement.htm', 'pdelayer_PDEEndGroup.htm', 'aslayer_ASText.htm', 'pdslayer_PDSMCRef.htm', 'pdlayer_PDOCContext.htm', 'pdlayer_PDThumb.htm', 'dlextras_PDDocTextFinder.htm', 'pdlayer_PDFont.htm', 'coslayer_CosDict.htm', 'pdelayer_PDEPath.htm', 'pdfllayer_PDDoc.htm', 'aslayer_ASUUID.htm', 'pdslayer_PDSAttrObj.htm', 'pdelayer_JPXPalette.htm'], 'Java': ['APDFL18.0.4PlusP1z'], 'DotNetFramework': ['APDFL18.0.4PlusP1z']}
    selct = document.getElementById("verDrop")
    selct.textContent = ''
    selct.appendChild(new Option("-"))
    for (var ver = 0; ver < verDict[lang].length; ver ++) {
        selct.appendChild(new Option(verDict[lang][ver]))
        //goToPage(lang, verDict[lang][ver])
    }
}

function getContent() {
    //const args = Array.prototype.slice.call(arguments);
   // const request = new XMLHttpRequest();

   // alert("load")

    /*request.open('GET', "https://github.com/datalogics/datalogics.github.io", true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            var response = JSON.parse(request.responseText);
        }
    }

    request.send();
    //var response = request.responseText
    console.log(response)
    */
    console.log("Done")
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
    