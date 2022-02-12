import { FormControl } from "@angular/forms";

export function restrictedWords(words: string[]) {
  return (control: FormControl): {[Key: string]: any } => {
    if (!words.length) return null;

    var invalidWords = words.map(w => control.value.toLowerCase().includes(w.toLowerCase()) ? w : null)
                            .filter(w => w != null);

    return invalidWords && invalidWords.length > 0
      ? {'restrictedWords': invalidWords.join(', ')}
      : null;
  }
}
