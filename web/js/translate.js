///起動時にインスタンスを生成
window.addEventListener('DOMContentLoaded',() => {
    eel.py_build_instance();
},false);

///翻訳ボタンクリック時に翻訳を実行
window.addEventListener('DOMContentLoaded',() => {
    document.getElementById('translate-button').addEventListener('click', () => {
        text = document.getElementById('input-text-field').value;
        original_lang = document.getElementById('original-lang-select').value;
        translate_lang = document.getElementById('translate-lang-select').value;
        if(original_lang == "" || translate_lang == ""){
            window.alert('言語を選択してください');
        }else{
            eel.py_translate(text,original_lang,translate_lang);
        }
    },false);
},false);

///リセットボタン
window.addEventListener('DOMContentLoaded',() => {
    document.getElementById('reset-button').addEventListener('click', () => {
        document.getElementById('input-text-field').value = "";
        document.getElementById('output-text-field').value = "";
    },false);
},false);

eel.expose(js_output_text)
function js_output_text(text){
    document.getElementById('output-text-field').value = text;
}
