import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class SimpleSimulation extends Simulation {

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
      .check(status.is(200))
    )

  setUp(
    scnGetUsuarios.inject(                
      nothingFor(4), // Pausa por 4s
      atOnceUsers(10), // Injeta 10 usuários de uma só vez.
      rampUsers(10).during(5), // injeta 10 usuários distribuídos uniformemente em 5s.
      constantUsersPerSec(20).during(15).randomized, // injeta 20 usuários a uma taxa constante, definida em usuários por segundo, durante um determinado período. Os usuários serão injetados em intervalos aleatórios.
      rampUsersPerSec(10).to(20).during(30) // injeta de 10 até 20 usuários, definida em usuários por segundo, durante 10 min. Os usuários serão injetados em intervalos regulares.    
    ).protocols(httpProtocol)
  )
  .assertions(global.responseTime.max.lt(100)) // Verifica se o tempo de resposta máximo global é inferior a 100 milissegundos.
  .assertions(forAll.failedRequests.percent.lte(5)) // Verifica se a porcentagem de requisições com falha (erro 4xx ou 5xx) em relação ao total de requisições é menor ou igual a 5%.
}
