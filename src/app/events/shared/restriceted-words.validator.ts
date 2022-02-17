import { FormControl } from "@angular/forms";

export function restrictedWords(words: string[]) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (control: FormControl): {[Key: string]: any } => {
    if (!words.length) return null;

    const invalidWords = words.map(w => control.value.toLowerCase().includes(w.toLowerCase()) ? w : null)
                            .filter(w => w != null);

    return invalidWords && invalidWords.length > 0
      ? {'restrictedWords': invalidWords.join(', ')}
      : null;
  }
}
