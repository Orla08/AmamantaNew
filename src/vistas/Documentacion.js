import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native'

const imgIntrouccion = require("../../assets/tonykroos.jpg");

const Documentacion = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View>
            <View style={[styles.containerIntroduccion, styles.sombra2]}>
                <Text style={styles.txtBienvenida}>Documentación</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 10 }}>
                    <View style={styles.contenedoresDeTexto}>
                        <Text style={styles.txtSubtitulos}>CAPITULO 1</Text>
                        <Text style={styles.txtSubtitulos}>¿Que es la lactancia materna?</Text>
                        <Text style={styles.txtCuerpos}>La lactancia materna les proporciona a los bebés todos los nutrientes que necesitan para crecer y que su sistema inmunológico se desarrole plenamente.
                            La Organización Mundial de la Salud (OMS) y UNICEF recomiendan que la leche materna sea el alimento exclusivo de los bebés recién nacidos
                            hasta los 6 meses de esdad, y que hasta los dos años se alimenten con una combinación de la misma con alimentos adecuados y nutritivos para su edad.
                        </Text>
                    </View>
                    <View style={styles.contenedoresDeTexto}>
                        <Text style={styles.txtSubtitulos}>CAPITULO 2</Text>
                        <Text style={styles.txtSubtitulos}>Desde el inicio del embarazo una compleja interacción hormonal prepara el cuerpo para la lactancia.</Text>
                        <Text style={styles.txtCuerpos}>
                            El cuerpo de cada mujer es diferente, pero la mayoría de las madres experimenta una serie de síntomas comunes que, aunque podrían llegar a
                            ser molestos, son muestra del increible trabajo que hace el cuerpo umano para alimnetar al bebé.
                        </Text>
                        <Text style={styles.txtSubtitulos}>Durante el embarazo se producen muchos cambios que favorecen la preparacion para la lactanica, entre ellos:</Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Línea negra: </Text>
                            <Text style={styles.txtCuerpos}>es la linea oscura que se desarrolla a través de su vientre durante el embarazo.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Cambios en los senos (mamás): </Text>
                            <Text style={styles.txtCuerpos}>
                                Casi desde el inicio del embarazo las mamás empiezan a cambiar. Uno de los primeros síntomas del embarazo es el aummento de tensión en la
                                mamás, acompañado de una sensación de calor. La mamá aumenta de tamaño y se prepara para la función del amamntamiento.
                            </Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Aumenta el tamaño y sensibilidad de los senos: </Text>
                            <Text style={styles.txtCuerpos}>
                                Este síntoma se intensifica a lo largo del embarazo, ya que el tejido graso mamario es reemplazado por tejido glandular, maduran
                                los conductos por donde la leche recorrerá el camino hasta alimentar al bebé. Cuando la madre deja de lactar, los senos vuelven a su estado natural.
                            </Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Cambios en la pigmentacion de la piel: </Text>
                            <Text style={styles.txtCuerpos}>Durante la gestación se oscurecen zonas especifícas del cuerpo de la mujer. Este aumento de la pigmentación
                                se debe a un incremento de la actividad de la hormona melanoestimulante, responsable de la formación de la melanina provocada por la
                                progesterona. Las zonas que se oscurecen son: la areola y el pezon, se oscurcen, pero además también se pigmenta un halo en torno a la areorla
                                que se conoce como areola de Bubois. Esto no es casual, sino que cumple la función de facilitar el camino hasta el pecho materno y favorecerel vínculo.</Text>
                        </Text>
                    </View>
                    <View style={styles.contenedoresDeTexto}>
                        <Text style={styles.txtSubtitulos}>CAPITULO 3</Text>
                        <Text style={styles.txtSubtitulos}>Beneficios de la lactancia materna:</Text>
                        <View style={{ marginBottom: 25 }}>
                            <Text style={styles.conceptos}>Para la madre:</Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Establece y fortalece el vinculo afectivo entre madre e hijo, una experiencia única.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Ayuda a la rápida recuperación despues del parto.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Ayuda a quemar calorías adicionales lo que permite recuperar rápidamente el pesp previo al embarazo.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Previene la depresión post-parto.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Disminuye el riesgo de sangrado en el post-parto por lo tanto disminuye el riesgo de desarrollar anemia.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Disminuye el riesgo a padecer diabetes tipo 2.</Text>
                            </Text>
                        </View>
                        <View style={{ marginBottom: 25 }}>
                            <Text style={styles.conceptos}>Para el bebé:</Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>La leche materna está llena de inmunoglobulinas que protegen a los bebés contra la neumonía, la diarrea, las proporciona
                                    los nutrientes necesarios en calidad y cantidad, para un crecimiento y desarrollo adecuado.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Reduce en casi 20% el riesgo de morir en el primer mes.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Disminuye el riesgo de desnutrición.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Tiene líquidos y electrolitos suficente para su hidratación.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Favorece el desarrollo emocional e intelectual.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Reduce el riesgo de sobrepeso y obesidad infantil en un 12%.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Mejora el desarrollo motriz de los bebés.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Alimenta al bebé en cualquier momento ya que siempre se encientra disponible y al alcance de
                                    cualquier persona.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>No se tiene que comprar, ni necesita preparación, ni almacenamiento.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Favorece el ahorro familiar al no tener que gastar en fórmulas lácteas, biberones, chupones
                                    y demas utensilios para prepararla.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Disminuye los gastos de atención de salud del bebé, ya que el niño es menos propenso a enfermarse.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Ahorra tiempo en la preparacion de fórmula, el lavado y la esterilización de biberones.</Text>
                            </Text>
                        </View>
                        <View style={{ marginBottom: 25 }}>
                            <Text style={styles.conceptos}>Para la familia:</Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Alimenta al bebé en cualquier momento ya que siempre se encuentra disponible y al alcance de cualqueir economía.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>No se tiene que comprar, ni necesita preparació, ni almacenamiento.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Favorece el ahorro familiar al no tener que gastar en formulas lácteas, biberones, chupones y demás utensilios para prepararla.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Disminuye los gastos de atención de salud del bebé, ya que el niño es menos propenso a enfermarse.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Ahorra tiempo en la preparación de fórmula, el lavado y la esterelización de biberones.</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.contenedoresDeTexto}>
                        <Text style={styles.txtSubtitulos}>CAPITULO 4</Text>
                        <Text style={styles.conceptos}>¿Existen cambios en la leche?</Text>
                        <Text style={styles.txtCuerpos}>
                            Si. Tu leche materna se modifica los días posteriores al nacimiento y sigue cambiando a medida que tu  bebé crece. Aprende que ocurrirá
                            con tu leche, con tu bebé y contigo en las primeras semanas.
                        </Text>
                        <Text style={styles.conceptos}>Nacimiento</Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Leche: </Text>
                            <Text style={styles.txtCuerpos}>tu cuerpo produce clostro (una leche rica en nutrientes, espesa y de color amarillento). Le aporta
                                a tu bebé protección temprana contra enfermedades.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Cuerpo: </Text>
                            <Text style={styles.txtCuerpos}>probablemente tu bebé esté despierto en la primera hora después de su nacimiento. Es un buen momento para amamantarlo.
                                Tú(mamá): deja que tu bebé inicie el proceso de buscar tu pezón. Esta forma de lactancia iniciada por el bebé lo ayuda a prenderse bien.</Text>
                        </Text>
                        <Text style={styles.conceptos}>Primeras 12 a 24 horas</Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Leche: </Text>
                            <Text style={styles.txtCuerpos}>tu bebé tomará alrededor de 1 cucharadita de calostro cada vez que se alimente. Quizás no veas el calostro,
                                pero tiene lo que tu bebé necesita y en la cantidad justa. </Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Bebé: </Text>
                            <Text style={styles.txtCuerpos}>es normal que el bebé duerma mucho. ¡El trabajo de parto y el parto son extenuantes! A algunos bebés les gusta acurrucarse
                                y quizá esten muy cansados al principio para lactar. Las sesiones de alimentación pueden ser cortas y desorganizadas.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Tú (mamá): </Text>
                            <Text style={styles.txtCuerpos}>.tu cuerpo aún no está produciendo el calostro. Aprovecha la necesidad instintiva de tu bebé de succionar y alimentarse cada
                                vez que se despierta, cada dos horas, para ayudar a que tu leche baje más rápido.</Text>
                        </Text>
                        <Text style={styles.conceptos}>Los siguientes 3 a 5 días</Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Leche: </Text>
                            <Text style={styles.txtCuerpos}>tu leche madura (blanca) reemplaza al calostro. Al principio es normal que la leche madura tenga un tinte amarillo o dorado. </Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Bebé: </Text>
                            <Text style={styles.txtCuerpos}>tu bebé comerá muchas veces, al menos de 8 a 12 veces o más por 24 horas. Los bebés lactantes muy pequeños no tienen horarios para
                                comer. Está bien si tu bebé come cada 2 a 3 horas durante varias horas y después duerme de 3 a 4 horas. Las sesiones de alimentación pueden durar 15 a 20 minutos en cada seno.
                                El ritmo de succión del bebé será lento y largó. Es posible que escuches el sonido del bebé tragar.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Tú (mamá): </Text>
                            <Text style={styles.txtCuerpos}>tus senos pueden estar llenos y perder algo de leche. (Puedes usar protectores mamarios desechables o paños en el sosten
                                para que absorban las pérdidas).</Text>
                        </Text>
                        <Text style={styles.conceptos}>Primeras 4 a 6 semanas</Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Leche: </Text>
                            <Text style={styles.txtCuerpos}>continúa la leche blanca. </Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Bebé: </Text>
                            <Text style={styles.txtCuerpos}>tu bebé probablemente ya sepa amamantar y tenga un estómago más grande para tomar más leche. Amamantar puede requerir de menos
                                tiempo y puede ser más espaciado.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Tú (mamá): </Text>
                            <Text style={styles.txtCuerpos}>tu cuerpo se acostumbra a la lactancia materna. Tus senos pueden estar más blandos y las pérdidas pueden disminuir.</Text>
                        </Text>
                    </View>
                    <View style={styles.contenedoresDeTexto}>
                        <Text style={styles.txtSubtitulos}>CAPITULO 5</Text>
                        <Text style={styles.txtSubtitulos}>Posiciones para amamantar y para la ubicación del bebé</Text>
                        <Text style={styles.txtCuerpos}>Independientemente de la postura que adopte la madre para amamantar, existen unos principios básicos que deben ser tenidos
                            en cuenta y que facilitan el agarre del bebé y en consecuencia, la transferencia eficaz de leche y el vaciado adecuado del pecho.</Text>
                        <Text style={styles.txtCuerpos}>1. La madre debe de sentirse cómoda con la postura. La utilización de cojines o almohadas puede ser resultar útil.</Text>
                        <Text style={styles.txtCuerpos}>2. El cuerpo del bebé debe estar en estrecho contacto con el de la madre. Cuando la madre está recostada, el peso del bebé descansa sobre el cuerpo de la madre
                            y resulta más fácil mantener ese contacto estrecho de los reflejos en el lactante.</Text>
                        <Text style={styles.txtCuerpos}>3. La cabeza debe estar frente al pecho, bien alineada con el cuerpo (el cuello no debe estar flexionando, ni la cabeza girada)
                            . Es preferible desplazar al bebé que desplazar al pecho de la madre.</Text>
                        <Text style={styles.txtCuerpos}>4. El mentón debe estar apoyado en el pecho con el pezón encima del labio superior, a la altura de la nariz. De esta forma, cuando
                            el bebé ponga en marcha el reflejo de búsqueda y agarre el pecho, el cuello quedará en ligera hiperextensión, facilitando la coordinacion, succión, deglución y respiración.</Text>
                        <Text style={styles.txtCuerpos}>5. Es preferible favorecer el afianzamiento espontáneo, cuando la boca del bebé esté bien abierta, acercarle el pecho
                            y permitir que sea él quien lo agarre. Si el bebé no lo consigue, puede ser útil el agarre dirigido (ver técnica al final del anexo).</Text>
                        <View style={{ marginBottom: 17 }}>
                            <Text style={styles.conceptos}>Posicion en crianza biologica</Text>
                            <Text style={{ textAlign: 'justify', marginTop: 10 }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Madre semirecostada (entre 15°-65°) y cómoda.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Bebé colocado encima de la madre con la cara entre sus pechos.</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Permitir que sea el bebé quien se desplace hacia el pecho de la madre y realice un agarre espontáneo</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Esta postura es especialmente útil cuando existen dificultades con el agarre, ya que facilita que el recién nacido ponga
                                    en marcha sus reflejos instintivos. El recién nacido cabecea y se desplaza buscando el pecho de la madre. Esta postura también es útil cuando existe dolor en el periné.</Text>
                            </Text>
                        </View>
                        <View style={{ marginBottom: 17 }}>
                            <Text style={styles.conceptos}>Posición de cuna</Text>
                            <Text style={{ textAlign: 'justify', marginTop: 10 }}>
                                <Text style={styles.txtCuerpos}>Es una de las posturas más utilizadas: la madre sujeta el cuello y la cabeza del bebé con el mismo brazo y mano del pecho que ofrece.
                                    Para que el cuello no esté flexionando, en la mayoría de los casos es necesario colocar la cabeza en los antebrazos en lugar del codo y la mano en la espalda en lugar de los gluteos. </Text>
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.conceptos}>Posición de dancer</Text>
                            <Text style={{ textAlign: 'justify', marginTop: 10 }}>
                                <Text style={styles.txtCuerpos}>La madre coloca al bebé sentado a caballito sobre su muslo con la cabeza frente al pecho. Con una mano sujeta al bebé ppor la espalda
                                    y con la otra afianza el mentón del bebé a su pecho. Coloca la mano en forma de bandeja bajo el pecho, con el dedo índice y el pulgar en forma de U afianza su mentón.
                                    Esta postura es especialmente útil en:</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Problemas con el paladar</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Hipotonía (sindrome de Down..)</Text>
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Retrognatia</Text>
                            </Text>
                            <Text style={styles.containerConceptos}>
                                <Text style={styles.conceptos}>-  </Text>
                                <Text style={styles.txtCuerpos}>Reflujo gastroesofágico</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.contenedoresDeTexto}>
                        <Text style={styles.txtSubtitulos}>CAPITULO 6</Text>
                        <Text style={styles.txtSubtitulos}>Tipos de pezón</Text>
                        <Text style={styles.txtCuerpos}>Existen diferentes tipos de pezón:</Text>
                        <Text style={{ textAlign: 'justify' }}>
                            <Text style={styles.conceptos}>-  </Text>
                            <Text style={styles.txtCuerpos}>Invertido</Text>
                        </Text>
                        <Text style={{ textAlign: 'justify' }}>
                            <Text style={styles.conceptos}>-  </Text>
                            <Text style={styles.txtCuerpos}>Retractil</Text>
                        </Text>
                        <Text style={{ textAlign: 'justify' }}>
                            <Text style={styles.conceptos}>-  </Text>
                            <Text style={styles.txtCuerpos}>Plano</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>-  </Text>
                            <Text style={styles.txtCuerpos}>Alargado..</Text>
                        </Text>
                        <Text style={styles.txtCuerpos}>Pero ¿Influye la forma del pezón en la lactancia materna? Y ¿De que manera en función del tipo de pezones
                            que tengamos? ¡Te lo explicamos!</Text>
                        <Text style={styles.txtSubtitulos}>¿Te preguntas si tu tipo de pezón afecta a la lactancia?</Text>
                        <Text style={styles.txtCuerpos}>En principio, los tipos de pezón y el tamaño de los mismos no influyen en la capacidad de lactar. Sin embargo, si que pueden
                            tener lugar algunos problemas en el pezón que requieran algún tipo más de atención.</Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Pezón normal: </Text>
                            <Text style={styles.txtCuerpos}>Se dice que el pezón es normal cuando sobresale unos milímetros de la areola en su estado normal y aumenta sin problemas
                                por ejemplo ante un cambio de temperatura o la manipulación táctil.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Pezón Plano: </Text>
                            <Text style={styles.txtCuerpos}>A veces se confunden con la areola pero si reaccionan ante la estimulación y pueden volverse normales durante la lactancia
                                materna. Su única peculiaridad es que es más corto de lo común.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Pezón Invertido: </Text>
                            <Text style={styles.txtCuerpos}>El pezón invertido se hunde en su parte central. Puede tener este aspecto siempre o solo al estimularlo.
                                En ocasiones, los pezones invertidos se retraen hasta quedar al ras de la areola, o incluso pueden hundirse en el tejido mamario.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Macro Pezón: </Text>
                            <Text style={styles.txtCuerpos}>Los pezones no suelen ser demasiado grandes, pero hay excepciones en que pueden llegar a medir hasta 20 cm. En cualquier caso,
                                no supone un inconveniente para la salud. Quizás si podrías tener problemas durante la lactancia si es demadiado grande para el bebé.</Text>
                        </Text>
                        <Text style={styles.txtSubtitulos}>Lesiones del pezón</Text>
                        <Text style={styles.txtCuerpos}>Dar el pecho no debe doler nunca. El tener grietas o dolor no es ni normal, ni debemos acostumbrarnos a ello. Si aparecen,
                            debemos buscar la causa de su aparición y solucionar el problema.</Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Perlas del pezón: </Text>
                            <Text style={styles.txtCuerpos}>Son un punto blanco en el pezón generadas por el traumatismo de los conductos.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Mastitis: </Text>
                            <Text style={styles.txtCuerpos}>Es una inflamación en el tejido mamario que a veces implica una infección.
                                Generada por el vaciamineto incompleto del pecho causa importante es el mal agarre.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Dolor posterior al amamantamiento: </Text>
                            <Text style={styles.txtCuerpos}>Muchas madres sienten ardor y punzadas que muchas veces se convierte en dolor mamario crónico.</Text>
                        </Text>
                        <Text style={styles.conceptos}>Las grietas: </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.txtCuerpos}>Son heridas que se producen en el pezón o areola y que pueden producir mucho dolor y llegar a comprometer
                                seriamente la continuidad de la lactancia.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>¿Cúal es la causa? </Text>
                            <Text style={styles.txtCuerpos}>Posicion o agarre del niño inadecuados, presencia de frenillo sublingual.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>¿Como actuar ante ellas? </Text>
                            <Text style={styles.txtCuerpos}>Asegurarse de que la postura es correcta, evitar el uso de chupetes si exite frenillo sublingual corto,
                                micrognatia o retrognatia: aunque se pueden adoptar posturas para reducir el rozamiento.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>¿Como tratar la grieta? </Text>
                            <Text style={styles.txtCuerpos}>Debemos manterener la piel limpia y seca. Intentar mantener la herida al aire. Es interesante limitar el uso de
                                discos de lactancia, ya que la piel se puede macerar al permanecer tapada y húmeda. Cubre tus pezones con un poco de leche materna (pasa los dedos
                                muy limpios) después de cada toma. Esta tiene propiedades cicatrizantes y desinfectantes.</Text>
                        </Text>
                        <Text style={styles.conceptos}>Cuidado de los pezones</Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.txtCuerpos}>Para el cuidado de los pezones recurrí al metodo 'A.L.A.S': </Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Aire: </Text>
                            <Text style={styles.txtCuerpos}>Dejarlos de secar al aire despues de cada toma.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Lubricación: </Text>
                            <Text style={styles.txtCuerpos}>Con una gota de la primera leche que producís, para o tratar las grietas de la piel.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Agua: </Text>
                            <Text style={styles.txtCuerpos}>Para lavarlos, sin utilizar jabón y nunca frotarlos.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>Sol: </Text>
                            <Text style={styles.txtCuerpos}>En tomas de unos pocos minutos, siempre antes de las 11 horas y despues de las 16 horas.</Text>
                        </Text>
                    </View>
                    <View style={styles.contenedoresDeTexto}>
                        <Text style={styles.txtSubtitulos}>CAPITULO 7</Text>
                        <Text style={[styles.conceptos, { marginBottom: 15 }]}>La lactancia materna </Text>
                        <Text style={styles.txtCuerpos}>En la lactancia materna es frecuente que algún momento la madre tenga que extraerse la leche para su conversacion,
                            para ofrecersela al bebé, donarla o desecharla. Hay muchas situaciones y circunstancias en las que es necesaria la extracción de leche: niños
                            prematuros, bebés a los que no se les puede ofrecer pecho materno y se deben alimentar de otra forma, cuando existe separación made e hijo y
                            no se quiere destetar al bebé; o el más común de todos, cuando la madre inicia su actividad laboral.
                        </Text>
                        <Text style={styles.txtCuerpos}>La extracción de la leche también es imprescindible cuando la madre desea conservar el alimento de su bebé  para emplearlo en otras ocasiones,
                            creando su propio banco de leche. Pero ay más motivos como por ejemplo, para disminuir las molestias cuando se produce la ingurgitación mamaria, obstrucciones, mástitis.</Text>
                        <Text style={[styles.conceptos, { marginBottom: 15 }]}>Como empezar la extracción de leche </Text>
                        <Text style={styles.txtCuerpos}>
                            Para realizar una correcta extracción de leche siempre se deben de tener en cuenta dos precauciones básicas:
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>-  </Text>
                            <Text style={styles.txtCuerpos}>Lavarse antes las manos para realizala.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>-  </Text>
                            <Text style={styles.txtCuerpos}>Masajear previamente las mamas antes de la extracción para facilitar posteriormente el proceso.</Text>
                        </Text>
                        <Text style={styles.containerConceptos}>
                            <Text style={styles.conceptos}>-  </Text>
                            <Text style={styles.txtCuerpos}>Tras el masaje, debe estimularse la areola y el pezón para conseguir que se active el reflejo de ayección
                                de la mama, más conocido como "subida de leche".</Text>
                        </Text>
                        <Text style={styles.txtCuerpos}>2. Frotar el pecho cuidadosamente desde la aprte superior hacia el pezón. Continuadr este
                            movimiento desde la periferia hacía el pezón alrededor de todo el pecho.</Text>
                        <Text style={styles.txtCuerpos}>3. Sacudir suavemente ambos pechos inclinandoswe hacia adelante.</Text>
                        <Text style={styles.conceptos}>Estimulación de la bajada de leche</Text>
                        <Text style={styles.txtCuerpos}>Sea manual o con bomba para facilitar la extracción ha de estimularse el reflejo de eyección láctea, mediante 3 pasos:</Text>
                        <Text style={styles.txtCuerpos}>1. Masajear firmemente el pecho de las siguientes formas:</Text>
                        <View style={styles.imagen}>
                            <Text style={{ color: '#fff' }}>Hola</Text>
                        </View>
                        <Text style={styles.conceptos}>Técnicas de extracción de leche</Text>
                        <Text style={styles.txtCuerpos}>La leche puede extraerse de forma manual o con sacaleches. Los resultados van mejorando a medida que la madre coge práctica
                            y confianza. En las primeras extracciones puede que sólo se obtengan unas cuantas gotas.</Text>
                        <Text style={styles.txtCuerpos}>Cuando se compplementa la extracción con sacaleches con la extracción manual y en consecuencia aumenta significativamente la producción de leche</Text>
                        <Text style={styles.conceptos}>Técnica marmet</Text>
                        <Text style={styles.txtCuerpos}>Lavarse las manos, colocar el pulgar y los dedos índice y medio formando una "C" a unos 3 o 4 cm por detrás del pezón.</Text>
                        <Text style={styles.txtCuerpos}>Evitar que el pecho descanse sobre la mano.</Text>
                        <Text style={styles.txtCuerpos}>Empujar los dedos hacia atrñas (hacia las costillas), sin separarlos. Para pechos grandes o caídos empujar los dedos hacia atrás.</Text>
                        <Text style={styles.txtCuerpos}>Rodar los dedos y el pulgar hacia el pezón, con movimientos de rodillo (rodar, no deslizar).</Text>
                        <Text style={styles.txtCuerpos}>Repetir rítmicamente (colocar los dedos, empujar hacia dentro, rodar).</Text>
                        <Text style={styles.txtCuerpos}>Rotar la posición de los dedos para vaciar otras partes del pecho. Se pueden usar una o ambas manos.</Text>
                        <Text style={styles.txtCuerpos}>Extraer la leche de cada pecho hasta que el flujo se haga más lento.</Text>
                        <Text style={styles.txtCuerpos}>Provocar el reflejo de bajada en ambos pechos (masajear, frotar, sacudir): puede hacerse simultáneamente</Text>
                        <Text style={styles.txtCuerpos}>Repetir todo el proceso (bajada - extraccion) una o dos veces más. El flujo generalmente se enlentece antes la segunda y la tercera vez,
                            a medida que el pecho se va vaciando.</Text>
                        <Text style={styles.txtCuerpos}>Delicadeza. Evitar estiramientos y maniobras de presión en el pecho o pezón.</Text>
                        <Text style={styles.conceptos}>Uso del extractor de lecho</Text>
                        <Text style={styles.txtCuerpos}>Lavarse las manos, preparar los pechos igual para que la extracción manuela (masajear, frotar, sacudir).</Text>
                        <Text style={styles.txtCuerpos}>Colocar la copa de tamaño adecuado sobre el pecho.</Text>
                        <Text style={styles.txtCuerpos}>Comenzar usando tracciones cortas y rápidas, imitando la "llamda a la leche" del bebé.</Text>
                        <Text style={styles.txtCuerpos}>Cuando se vea algo de leche realizar aspiraciones largas y uniformes evitando la tentación de usar demasiada aspiración y producir dolor.</Text>
                        <Text style={styles.txtCuerpos}>Si el sacaleches tiene regulador empezar por el nivel más bajo e incremento hasta que la leche fluya libremente y la madre se sienta cómoda</Text>
                        <Text style={styles.txtCuerpos}>Usar 5-7 minutos en cada lado (previo masaje) o hasta que el chorro o las gotas sean más lentas. Cambiar de pecho y repetir 2-3 veces.</Text>
                        <Text style={styles.txtCuerpos}>Igual que con la extracción manual puede que en las primeras extracciones sólo se obtengan unas cuantas gotas.
                            Es normal, en sucesivas extracciones la cantidad irá aumentando.</Text>
                        <Text style={styles.conceptos}>Uso del extractor eléctrico</Text>
                        <Text style={styles.txtCuerpos}>Preparar los pechos igual que para la extracción manual (masajear, frotar, sacudir).</Text>
                        <Text style={styles.txtCuerpos}>Poner el control en el nivel de presión más bajo.</Text>
                        <Text style={styles.txtCuerpos}>Conectar según las instrucciones del fabricante.</Text>
                        <Text style={styles.txtCuerpos}>Colocar la copa de tamaño adecuado sobre el pecho. Segurarse de que está bien adaptado(sellado).</Text>
                        <Text style={styles.txtCuerpos}>Encender el extractor. El pezón se moverá hacia adelante y hacia atrás dentro del embudo</Text>
                        <Text style={styles.txtCuerpos}>Empezar por el nivel más bajo e incremento hasta que la leche fluya libremente y la madre se sienta cómoda.</Text>
                        <Text style={styles.txtCuerpos}>Cuando aparezca algo de leche, aumentar poco a poco el nivel de as`piración, hasta alcanzar el máximo vacío que no produzca
                            dolor. El bombeo forzoso y doloroso bloquea el mecanismo de liberación de la leche y puede dejar el pecho dolorido.</Text>
                        <Text style={styles.txtCuerpos}>Realizar la extracción alternando ambos pechos. Extraer durante 5 a 7 minutos o hasta que empiece a gotear más lentamente, cambiar
                            de pecho, masajear, sacudir y volver a extraer. En total unas 2 a 3 veces en cada pecho</Text>
                        <Text style={styles.txtCuerpos}></Text>
                        <Text style={styles.txtCuerpos}></Text>
                        <Text style={styles.txtCuerpos}></Text>
                        <Text style={styles.txtCuerpos}></Text>


                    </View>

                </View>
            </ScrollView >

        </View >
      </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
     containerIntroduccion: {
        backgroundColor: '#ffadc6',
        height: 130,
        marginBottom: 10,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txtBienvenida: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        marginTop: 60,
        fontWeight: '700',
        //fontFamily: 'Roboto'
    },
    contenedoresDeTexto: {
        marginHorizontal: 20,
    },
    // txtCapitulos: {
    //     fontSize: 20,
    //     marginBottom: 15,
    //     color: '#000'
    // },
    txtSubtitulos: {
        fontSize: 25,
        marginBottom: 15,
        color: '#000',
        textAlign: 'justify',
        fontWeight: '600',
    },
    containerConceptos: {
        marginBottom: 20,
        textAlign: 'justify'
    },
    conceptos: {
        fontSize: 18,
        textAlign: 'justify',
        color: '#000',
        fontWeight: '600',
    },
    txtCuerpos: {
        fontSize: 18,
        marginBottom: 17,
        textAlign: 'justify',
        color: '#1b1a1a',

    },
    imagen: {
        backgroundColor: '#000',
        width: 250,
        height: 250,
        borderRadius: 20,
        marginHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    }

})


export default Documentacion