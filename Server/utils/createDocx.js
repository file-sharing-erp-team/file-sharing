const docx = require('docx')
const fs = require('fs')

class CreateDocument {
    create(name){
        console.log(name)
        const doc = new docx.Document({
            sections: [
                {
                    children: [
                        new docx.Paragraph({
                            text: name,
                            heading: docx.HeadingLevel.TITLE
                        })
                    ]
                }
            ]
        })
        
        
         docx.Packer.toBuffer(doc).then((buffer) => {
            fs.writeFileSync("My Document.docx", buffer);
        });
            
        const file = fs.readFileSync("My Document.docx")
        return file
       
    }
}

module.exports = new CreateDocument()
