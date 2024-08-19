import React, { useState } from "react"
import { marked } from "marked"


const MarkdownEditor = () => {
    // État pour stocker le texte Markdown
    const [markdown, setMarkdown] = useState("")

    // Met à jour l'état avec la valeur actuelle de la zone de texte
    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value)
    };

    // Fonction pour insérer la syntaxe Markdown
    const insertMarkdown = (syntax, placeholder = "") => {
        setMarkdown((prev) => `${prev}${syntax}${placeholder}`)
    }

    // Fonction pour vider le contenu de la zone de texte
    const clearMarkdown = () => {
        setMarkdown("")
    };

    // Fonction pour convertir le Markdown en HTML en utilisant la bibliothèque marked    
    const renderHTML = () => {
        return { __html: marked(markdown) }
    }

    return (
        <div className="markdown-editor">
            <div className="editor-toolbar">
                <button onClick={() => insertMarkdown("# ")}>Titre 1</button>
                <button onClick={() => insertMarkdown("## ")}>Titre 2</button>
                <button onClick={() => insertMarkdown("### ")}>Titre 3</button>

                <button onClick={() => insertMarkdown("> ")}>Citation</button>

                <button onClick={() => insertMarkdown("**bold**", "bold")}>Gras</button>
                <button onClick={() => insertMarkdown("_italic_", "italic")}>Italique</button>

                <button onClick={() => insertMarkdown("1. ")}>Liste ordonée</button>
                <button onClick={() => insertMarkdown("- ")}>Liste</button>

                <button onClick={() => insertMarkdown("```\ncode\n```", "code")}>Code</button>

                <button onClick={() => insertMarkdown("[texte du lien](https://www.ecomdesign.be)", "texte")}>Lien</button>

                <button onClick={() => insertMarkdown("![texte alternatif](https://www.ecomdesign.be/image.jpg)", "texte")}>Image</button>

                <button onClick={() => insertMarkdown("---\n")}>Ligne horizontale</button>
                
                <button onClick={clearMarkdown} style={{backgroundColor: 'red'}}>Effacer</button>
            </div>

            {/* Conteneur pour la zone de texte et la prévisualisation */}
            <div className="editor-container">

                <textarea
                    className="editor-textarea"
                    value={markdown}
                    onChange={handleMarkdownChange}
                    placeholder="Écrivez votre markdown ici..."
                />
                

                <div
                    className="editor-preview"
                    dangerouslySetInnerHTML={renderHTML()}
                />
            </div>
        </div>
    )
}

export default MarkdownEditor
