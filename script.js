import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      //do nothing
    } else if (currentElement === "E") {
      // auch E ignorieren
    } else {
      result.push(currentElement)
    }

    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []
  //Lauft Zeichen für Zeichen über den ganzen Text

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const upperCaseLetter = currentElement.toUpperCase()

    //Hänge den Code Doppelt an
    result.push(upperCaseLetter)
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []

  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "E") {
      count++
    }
  }

  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe08(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
      result.push(3)
    } else if (currentElement === "E") {
      //auch E ignorieren
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = []

  // Zaehlt die Zeichen
  let count = 0

  // Lauft Zeichen für Zeichen über den ganzen Text
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    count = count + 1
  }

  // count hat die Zeichen gezählt
  let genau6 = false
  if (count === 6) {
    genau6 = true
  }

  return genau6
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe05(args) {
  const input = args

  let hasUpperCaseLetter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Hier machen wir einen neuen Code, um die Groẞbuchstaben zu erkennen
    const upperCaseVersion = currentElement.toUpperCase()

    if (currentElement === ".") {
    } else if (currentElement === " ") {
    } else if (currentElement === upperCaseVersion) {
      hasUpperCaseLetter = true
    }
  }

  return hasUpperCaseLetter
}

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe15(args) {
  const input = args
  const result = []

  let leerzeichenErkannt = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " ") {
      leerzeichenErkannt = true
    }

    if (leerzeichenErkannt === false) {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe12(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      result.push(i)
    } else if (currentElement === "E") {
      result.push(i)
    } else {
      result.push(-1)
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe11(args) {
  const input = args
  const result = []

  //Erstelle eine Variable um den ASCII-Code zu speichern
  let asciiCode = 0

  //Speichere den ASCII-Code vom ersten Zeichen
  asciiCode = input.charCodeAt(0)

  //Gib den ASCII zurück
  return asciiCode
}

linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe07(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Speichere mir das nächste Element
    const nextElement = input[i + 1]

    // Speichere mir das übernaechste Element
    const nextNextElement = input[i + 2]

    // Üperprüfe ob ein u, ein n und d hintereinanderstehen
    if (
      currentElement === "u" &&
      nextElement === "n" &&
      nextNextElement === "d"
    ) {
      return true
    }
  }

  // Wenn im ganzen Text kein und vorkommt, dann gib false zurueck
  return false
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe06(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (48 <= ascii && ascii <= 57) {
      // IST OKAY, MACHE WEITER
    } else if (65 <= ascii && ascii <= 90) {
      // IST OKAY, MACHE WEITER
    } else if (97 <= ascii && ascii <= 122) {
      // IST OKAY, MACHE WEITER
    } else {
      return true
    }
  }

  return false
}

linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe19(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe22(args) {
  const input = args
  const result = []

  let foundK = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn das K noch nicht gefunden  wurde, hänge unterstriche an REsult
    if (foundK === false) {
      result.push("_")
    } else {
      result.push(currentElement)
    }

    // WEnn daas aktuelle Zeichen ein K ist, setzte foundK auf true
    if (currentElement === "k") {
      foundK = true
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  const result = []
  // Bitte erstelle mir eine neue variable die das erste zeichen von input speichert
  const firstElement = input[0]

  // Bitte hänge das erste element an result an
  result.push(firstElement)

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // hänge current element an result an
    result.push(currentElement)
  }

  // bitte hänge das erste element nochmals ganz hinten an result an¨
  result.push(firstElement)

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  const result = []

  if (input.length < 2) {
    return input
  }

  // Bitte erstelle mir eine neue variable die das erste zeichen von input speichert
  const firstElement = input[0]

  //Bitte erstelle mir eine neue variable die das letzte zeichen von input speichert
  const lastElement = input[input.length - 1]

  //Bitte hange das letzte element ganz hinten an result an
  result.push(lastElement)

  for (let i = 1; i < input.length - 1; i++) {
    const currentElement = input[i]
    // hange current element an result an
    result.push(currentElement)
  }

  // bitte hange das erste element ganz hinten an result an
  result.push(firstElement)

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  const result = []

  if (input.length % 2 === 0) {
    const middleIndex = Math.floor(input.length / 2) - 1
    const middlePlusOneIndex = middleIndex + 1

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]

      if (i === middleIndex || i === middlePlusOneIndex) {
        // lasse das element aus
      } else {
        result.push(currentElement)
      }
    }
  } else {
    //Bitte erstelle eine Variable, die das mittlere Zeichen speichert
    const middleIndex = Math.floor(input.length / 2)

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]

      if (i === middleIndex) {
        // lasse das element aus
      } else {
        result.push(currentElement)
      }
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(args) {
  const input = args
  const result = []

  //Bitte erstelle eine neue Variable, die dass erste Element speichert
  const firstElement = input[0]

  //Bitte erstelle eine neue Variable, die dass zweite Element speichert
  const secondElement = input[1]

  // Wenn der ASCII-Wert des ersten Elements grösser ist als des zweiten, dann vertausche die Elemente
  if (firstElement.charCodeAt(0) > secondElement.charCodeAt(0)) {
    // vertausche die Elemente
    result.push(secondElement)
    result.push(firstElement)
  } else {
    result.push(firstElement)
    result.push(secondElement)
  }

  for (let i = 2; i < input.length; i++) {
    const currentElement = input[i]

    result.push(currentElement)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  const input = args
  const result = []

  if (input.length === 0) {
    return false
  }

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (48 <= ascii && ascii <= 57) {
      // IST OKAY, MACHE WEITER
    } else {
      return false
    }
  }

  return true
}

linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe04(args) {
  const input = args

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      count = count + 1
    }
  }

  return count + 1
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

ex
