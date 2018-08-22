//MAGIC don't touch
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

//walk throught the html body
walk(document.body);

function walk(node) 
{
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
    var v = textNode.nodeValue; //The actual text here

    //Word/substring replacements
    v = v.replace("uck ", "ucksy wucksy ");
    v = v.replace(/[nN]/g, "ny");

    //character replacements
    for(var i = 0; i < v.length; i++) {
        switch (v.charAt(i)) {
            case 'r':
                v = v.replaceAt(i, 'w');
                break;
            case 'l':
                v = v.replaceAt(i, 'w');
                break;
            case '.':
                if (Math.random() < 0.25) {
                    v = v.replaceAt(i, ' UwU!');
                }
                break;
            default:
                break;
        }
    }

	textNode.nodeValue = v;
}