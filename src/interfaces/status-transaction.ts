export enum StatusTransaction {
  PENDENTE = 0,
  AGUARDANDO = 1,
  TRANSACAO_NAO_AUTORIZADA_APOS_ANALISE = 10,
  TRANSACAO_NAO_AUTORIZADA = 11,
  TRANSACAO_NAO_AUTORIZADA_PELA_OPERADORA = 12,
  TRANSACAO_NAO_AUTORIZADA_PELA_BRANVO = 13,
  TRANSACAO_APROVADA_APOS_ANALISE = 20,
  TRANSACAO_APROVADA = 21,
  TRANSACAO_APROVADA_PELA_OPERADORA = 22,
  TRANSACAO_APROVADA_PELA_BRANVO = 23,
  TRANSACAO_CANCELADA_PELA_LOJA = 30,
  SOLICITACAO_DE_CANCELAMENTO = 31,
  TRANSACAO_CANCELADA_PELA_OPERADORA = 32,
  TRANSACAO_CANCELADA_PELA_BRANVO = 33,
  TRANSACAO_CAPTURADA_CAPTURADA_PELA_LOJA = 40,
  TRANSACAO_CAPTURADA_SEM_AUTORIZACAO = 41,
  TRANSACAO_CAPTURADA_PELA_BRANVO = 43,
}
