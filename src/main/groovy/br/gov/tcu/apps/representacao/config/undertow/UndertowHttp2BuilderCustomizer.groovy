package br.gov.tcu.apps.representacao.config.undertow

import io.undertow.Undertow
import org.springframework.boot.context.embedded.undertow.UndertowBuilderCustomizer

import static io.undertow.UndertowOptions.ENABLE_HTTP2
import static java.lang.Boolean.TRUE

/**
 * Created by eric on 19/05/17.
 */
class UndertowHttp2BuilderCustomizer implements UndertowBuilderCustomizer {
    @Override
    void customize(Undertow.Builder builder) {
        builder.setServerOption(ENABLE_HTTP2, TRUE)
    }
}
