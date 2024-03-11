import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class AdvancedSimulation extends Simulation {

  val random = new Random()

  val httpProtocol = http
    .baseUrl("http://172.21.0.2:3000")
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0")

  val scnGetUsuarios = scenario("Buscar usuários")
    .exec(http("GET_usuarios")
      .get("/usuarios")
      .check(status.is(200)))
      .pause(2, 5)

  val scnGetProdutos = scenario("Buscar produtos")
    .exec(http("GET_produtos")
      .get("/produtos")
        .check(
        status.not(404),
        status.not(500)
      ))
      .pause(3, 6)

  val scnGetCarrinhos = scenario("Buscar carrinhos")
    .exec(http("GET_carrinhos")
      .get("/carrinhos")
      .check(jsonPath("$.quantidade").is("1")))
    .pause(4, 7)

  val scnPostUsuario = scenario("Criar Usuário")
    .exec(session => {
      val numeroAleatorio = random.nextInt(100)
      session
        .set("nome", s"José da Silva $numeroAleatorio")
        .set("email", s"usuario$numeroAleatorio@teste.com")
    })

    .exec(http("POST_Usuario")
      .post("/usuarios")
      .body(StringBody("""{"nome": "${nome}", "email": "${email}", "password": "teste123", "administrador": "false"}""")).asJson
      .check(status.is(201)))

  /*
  .exec(session => {
    println("Response body:")
    println(session("nome").as[String])
    println(session("email").as[String])
    session
  })
  */

  val cargaDistribuida = Seq(    
    scnGetUsuarios.inject(
      nothingFor(4), // Pausa por 4s
      atOnceUsers(10), // Injeta 10 usuários de uma só vez.
      rampUsers(10).during(5), // injeta 10 usuários distribuídos uniformemente em 5s.
      constantUsersPerSec(20).during(15), // injeta 20 usuários a uma taxa constante, definida em usuários por segundo, durante 15s. Os usuários serão injetados em intervalos regulares.
      constantUsersPerSec(20).during(15).randomized, // injeta 20 usuários a uma taxa constante, definida em usuários por segundo, durante um determinado período. Os usuários serão injetados em intervalos aleatórios.
      rampUsersPerSec(10).to(20).during(1.minutes), // injeta de 10 até 20 usuários, definida em usuários por segundo, durante 10 min. Os usuários serão injetados em intervalos regulares.
      rampUsersPerSec(10).to(20).during(1.minutes).randomized), // injeta usuários da taxa inicial até a taxa alvo, definida em usuários por segundo, durante um determinado período. Os usuários serão injetados em intervalos aleatórios.
    scnGetProdutos.inject(
      incrementUsersPerSec(5.0)
        .times(5)
        .eachLevelLasting(10)
        .separatedByRampsLasting(10)
        .startingFrom(10) 
      ),    
    scnGetCarrinhos.inject(
      rampUsers(20) during (20 seconds)),
    scnPostUsuario.inject(      
      rampUsers(20) during (20 seconds),
      atOnceUsers(10))      
  )

  setUp(cargaDistribuida: _*).protocols(httpProtocol)
      .assertions(global.responseTime.max.lt(100))
      .assertions(forAll.failedRequests.percent.lte(5))
}
