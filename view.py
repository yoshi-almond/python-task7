from googletrans import Translator
import sys
import eel

@eel.expose
def py_build_instance():
    global translator
    translator = Translator()

@eel.expose
def py_translate(text,original_lang,translate_lang):
    global translator
    output_text = translator.translate(text, src=original_lang ,dest=translate_lang).text
    eel.js_output_text(output_text)

eel.init("web")
eel.start("main.html")

