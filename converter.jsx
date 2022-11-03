var files = openDialog();
for(var key in files) {
    var inFile = files[key];
    open(inFile);
 
    var pngOptions = new PNGSaveOptions();
    pngOptions.interlaced = false;
    app.activeDocument.saveAs(inFile, pngOptions, true, Extension.LOWERCASE);
    app.activeDocument.close();
 }
