import org.httpobjects.jetty.HttpObjectsJettyHandler
import org.httpobjects.util.ClasspathResourceObject
import org.httpobjects.util.ClasspathResourcesObject

object Main extends App {

    val RESOURCES_PATH = "/";

    val rootResource:ClasspathResourceObject = new ClasspathResourceObject(RESOURCES_PATH,"/index.html", this.getClass)
    val staticResources:ClasspathResourcesObject  = new ClasspathResourcesObject("/{resource*}", this.getClass, RESOURCES_PATH)

    HttpObjectsJettyHandler.launchServer(8080, rootResource, staticResources);
}
