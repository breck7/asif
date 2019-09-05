{
"use strict";



class asifNode extends jtree.GrammarBackedRootNode {
      createParser() {
  return new jtree.TreeNode.Parser(this._getBlobNodeCatchAllNodeType(), Object.assign(Object.assign({}, super.createParser()._getFirstWordMap()), {"whatIsAsif?" : whatIsAsif_63Node,
"title" : titleNode,
"created" : createdNode,
"asifVersion" : asifVersionNode,
"doiId" : doiIdNode,
"comment" : commentNode,
"references" : referencesNode}), undefined)
  }
getGrammarProgramRoot() {
        if (!this._cachedGrammarProgramRoot)
          this._cachedGrammarProgramRoot = new jtree.GrammarProgram(`asifNode
 root
 inScope whatIsAsif_63Node titleNode createdNode asifVersionNode doiIdNode commentNode referencesNode
keywordCell
anyCell
intCell
whatIsAsif_63Node
 match whatIsAsif?
 cells keywordCell anyCell anyCell anyCell anyCell anyCell anyCell anyCell anyCell anyCell anyCell anyCell anyCell anyCell anyCell anyCell anyCell
titleNode
 cells keywordCell anyCell anyCell anyCell
createdNode
 cells keywordCell intCell
asifVersionNode
 cells keywordCell anyCell
doiIdNode
 cells keywordCell anyCell
commentNode
 cells keywordCell anyCell anyCell anyCell anyCell anyCell anyCell anyCell anyCell anyCell anyCell
referencesNode
 inScope doiNode paperNode urlNode
 cells keywordCell
doiNode
 cells keywordCell anyCell anyCell anyCell
paperNode
 cells keywordCell anyCell anyCell anyCell
urlNode
 cells keywordCell anyCell anyCell anyCell anyCell anyCell`)
        return this._cachedGrammarProgramRoot
      }
static getNodeTypeMap() { return {"asifNode": asifNode,
"whatIsAsif_63Node": whatIsAsif_63Node,
"titleNode": titleNode,
"createdNode": createdNode,
"asifVersionNode": asifVersionNode,
"doiIdNode": doiIdNode,
"commentNode": commentNode,
"referencesNode": referencesNode,
"doiNode": doiNode,
"paperNode": paperNode,
"urlNode": urlNode }}
    }

class whatIsAsif_63Node extends jtree.GrammarBackedNonRootNode {
      get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWord(1)
    }
get anyCell() {
      return this.getWord(2)
    }
get anyCell() {
      return this.getWord(3)
    }
get anyCell() {
      return this.getWord(4)
    }
get anyCell() {
      return this.getWord(5)
    }
get anyCell() {
      return this.getWord(6)
    }
get anyCell() {
      return this.getWord(7)
    }
get anyCell() {
      return this.getWord(8)
    }
get anyCell() {
      return this.getWord(9)
    }
get anyCell() {
      return this.getWord(10)
    }
get anyCell() {
      return this.getWord(11)
    }
get anyCell() {
      return this.getWord(12)
    }
get anyCell() {
      return this.getWord(13)
    }
get anyCell() {
      return this.getWord(14)
    }
get anyCell() {
      return this.getWord(15)
    }
get anyCell() {
      return this.getWord(16)
    }
    }

class titleNode extends jtree.GrammarBackedNonRootNode {
      get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWord(1)
    }
get anyCell() {
      return this.getWord(2)
    }
get anyCell() {
      return this.getWord(3)
    }
    }

class createdNode extends jtree.GrammarBackedNonRootNode {
      get keywordCell() {
      return this.getWord(0)
    }
get intCell() {
      return parseInt(this.getWord(1))
    }
    }

class asifVersionNode extends jtree.GrammarBackedNonRootNode {
      get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWord(1)
    }
    }

class doiIdNode extends jtree.GrammarBackedNonRootNode {
      get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWord(1)
    }
    }

class commentNode extends jtree.GrammarBackedNonRootNode {
      get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWord(1)
    }
get anyCell() {
      return this.getWord(2)
    }
get anyCell() {
      return this.getWord(3)
    }
get anyCell() {
      return this.getWord(4)
    }
get anyCell() {
      return this.getWord(5)
    }
get anyCell() {
      return this.getWord(6)
    }
get anyCell() {
      return this.getWord(7)
    }
get anyCell() {
      return this.getWord(8)
    }
get anyCell() {
      return this.getWord(9)
    }
get anyCell() {
      return this.getWord(10)
    }
    }

class referencesNode extends jtree.GrammarBackedNonRootNode {
      createParser() {
  return new jtree.TreeNode.Parser(undefined, Object.assign(Object.assign({}, super.createParser()._getFirstWordMap()), {"doi" : doiNode,
"paper" : paperNode,
"url" : urlNode}), undefined)
  }
get keywordCell() {
      return this.getWord(0)
    }
    }

class doiNode extends jtree.GrammarBackedNonRootNode {
      get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWord(1)
    }
get anyCell() {
      return this.getWord(2)
    }
get anyCell() {
      return this.getWord(3)
    }
    }

class paperNode extends jtree.GrammarBackedNonRootNode {
      get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWord(1)
    }
get anyCell() {
      return this.getWord(2)
    }
get anyCell() {
      return this.getWord(3)
    }
    }

class urlNode extends jtree.GrammarBackedNonRootNode {
      get keywordCell() {
      return this.getWord(0)
    }
get anyCell() {
      return this.getWord(1)
    }
get anyCell() {
      return this.getWord(2)
    }
get anyCell() {
      return this.getWord(3)
    }
get anyCell() {
      return this.getWord(4)
    }
get anyCell() {
      return this.getWord(5)
    }
    }

window.asifNode = asifNode
}