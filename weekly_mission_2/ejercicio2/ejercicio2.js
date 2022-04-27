const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

    //1.-Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
    console.log("******Nombre de cada Explorer")
    explorers.forEach(explorer =>console.log(explorer.name))

    //2.-Imprime el stack de cada explorer, usa FOR EACH
    console.log("******Stacks de cada explorer")
    explorers.forEach(explorer =>console.log(explorer.name,explorer.stack))

    //3.-Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
    console.log("******Lista de stacks")
    const StacksExplorers = explorers.map((explorer)=>explorer.stack)
    console.log(StacksExplorers)

    //4.-Obtén la lista de explorers que tengan en su stack "js", usa FILTER
    const JsStack=explorers.filter((explorer)=>explorer.stack.includes('js'))
    const JsStackExplorers=JsStack.map((explorer)=>explorer.name)
    console.log(`Los explorers con stack de Js son ${JsStackExplorers}`)

    //5.-Busca el primer explorer que sea de la CDMX, usa FIND
    const CDMXExplorer=explorers.find((explorers)=>explorers.city=='CDMX')
    console.log(`El primer explorer que reside en la CDMX es "${CDMXExplorer.name}"`)

    //6.-Obtén la suma de todos los exercises_completed, usa REDUCE
    const ExplorersExercises=explorers.map((explorer)=>explorer.exercises_completed)
    const all_exercises_completed=ExplorersExercises.reduce((fst,snd)=>fst+snd,0)
    console.log(`Entre todos los explorers se han resuelto ${all_exercises_completed} ejercicios`)

    //7.-Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
    const SomeExerciseFinished=explorers.some((explorer) => explorer.missions.frontend.exercisesFinished==true)
    console.log(`Algunos de los explorers terminaron sus ejercicios de FrontEnd: `+SomeExerciseFinished)
   
    //8.-Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY
    const OnboardingFinished=explorers.some((explorer) => explorer.missions.onboarding.isFinished==true)
    console.log(`Todos los explorers terminaron el Onboarding: `+OnboardingFinished)