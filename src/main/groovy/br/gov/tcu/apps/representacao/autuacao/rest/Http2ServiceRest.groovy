package br.gov.tcu.apps.representacao.autuacao.rest

import org.springframework.http.CacheControl
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

import java.util.concurrent.TimeUnit

/**
 * Created by eric on 12/05/17.
 */
@RestController
class Http2ServiceRest {

    @GetMapping("/")
    test() {
        println "Requisição recebida"
        return ResponseEntity.ok()
                .cacheControl(CacheControl.maxAge(1, TimeUnit.HOURS))
                .eTag("1")
                .body("Requisição recebida")
    }
}
