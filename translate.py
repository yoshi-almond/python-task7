from googletrans import Translator
import sys

def main():
    translator = Translator()
    while True:
        text = input("テキストを入力してください(終了するには0) >> ")
        if text == '':
            pass
        elif text == "0":
            sys.exit()
        else:
            print(translator.translate(text, dest='en').text)

if __name__ == "__main__":
    main()