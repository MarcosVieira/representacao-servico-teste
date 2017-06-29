package br.gov.tcu.apps.representacao.config.undertow

import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer
import org.springframework.boot.context.embedded.undertow.UndertowEmbeddedServletContainerFactory
import org.springframework.stereotype.Component
/**
 * Created by eric on 19/05/17.
 */
@Component
class UndertowHttp2Customizer implements EmbeddedServletContainerCustomizer {

    @Override
    void customize(ConfigurableEmbeddedServletContainer container) {
        UndertowEmbeddedServletContainerFactory factory = (UndertowEmbeddedServletContainerFactory) container
        factory.addBuilderCustomizers(new UndertowHttp2BuilderCustomizer())
    }
}

